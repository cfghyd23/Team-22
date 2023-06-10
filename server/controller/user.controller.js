let User = require('../models/user.model')
const bcrypt = require('bcryptjs')

exports.getAllusers = async (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const oldUser = await User.findOne({ email });
  
      if (!oldUser) return res.status(200).json({ success: false });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(200).json({ success: false });
      res.status(200).send({success: true, userID: oldUser._id});
    } catch (err) {
        console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    }
}

exports.register = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const { email, name, mobile, Password, dob, bloodGroup, weight, Gender} = req.body;

    let oldUser = null;

    await User.findOne({email})
        .then(data => {
            oldUser = data;
        });

    if(oldUser){
        return  res.status(200).send({success: false, message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(Password, 12);


    const newUser = new User({
        email,
        name,
        mobile,
        admin: false,
        Password: hashedPassword,
        dob,
        bloodGroup,
        weight,
        Gender,
        donor: 0,
        patient: 0
    });

    newUser.save()
        .then((data) => {
            // console.log(data);
            return res.send({...data,success:true});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({ message: err.message || "Error adding User" })
        });
}

exports.getAllPatients = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    let allPatients = []
    const patient = 3;
    await User.find({patient})
        .then(data => {
            allPatients = data;
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({message: err.message || "Error retrieving patients"})
        })
}

exports.getAllDonors = async (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    let allPatients = []
    const patient = 3;
    await User.find({patient})
        .then(data => {
            allPatients = data;
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send({message: err.message || "Error retrieving patients"})
        })
}