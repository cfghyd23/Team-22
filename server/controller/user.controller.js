const User = require('../model/user.model')
const bcrypt = require('bcryptjs')

exports.getAllusers = async (req, res) => {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

exports.login = async (req, res) => {
    const { email, Password } = req.body;

    try {
      const oldUser = await User.findOne({ email });
  
      if (!oldUser) return res.status(200).json({ success: false });
  
      const isPasswordCorrect = await bcrypt.compare(Password, oldUser.Password);
  
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

    console.log(req.body);

    const { email, name, mobile, Password, dob, bloodGroup, sex} = req.body;

    let oldUser = null;

    await User.findOne({email})
        .then(data => {
            oldUser = data;
        });

    if(oldUser){
        return  res.status(200).send({success: false, message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(Password, 12);

    console.log(hashedPassword);


    const newUser = new User({
        email,
        name,
        mobile,
        admin: false,
        Password: hashedPassword,
        dob,
        bloodGroup,
        sex,
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

exports.donorRequest = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const {id} = req.body;
    let oldUser = null;
    await User.findByIdAndUpdate(id,{donor:1})
        .then(data => {
            oldUser = data;
        });
        if (!oldUser) return res.status(200).json({ success: false });
        return res.status(200).json({...oldUser,success:true});
}

exports.patientRequest = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const {id} = req.body;
    let oldUser = null;
    await User.findByIdAndUpdate(id,{patient:1})
        .then(data => {
            oldUser = data;
        });
        if (!oldUser) return res.status(200).json({ success: false });
        return res.status(200).json({...oldUser,success:true});
}

exports.approveDonor = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const {id} = req.body;

    let oldUser = null;
    await User.findByIdAndUpdate(id,{donor:2})
    .then(data => {
        oldUser = data;
    });
    if (!oldUser) return res.status(200).json({ success: false });
        return res.status(200).json({...oldUser,success:true});
}

exports.approvePatient = async(req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "Cannot be empty!" });
        return;
    }

    const {id} = req.body;

    let oldUser = null;
    await User.findByIdAndUpdate(id,{patient:2})
    .then(data => {
        oldUser = data;
    });
    if (!oldUser) return res.status(200).json({ success: false });
        return res.status(200).json({...oldUser,success:true});
}