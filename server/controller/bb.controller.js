let bloodBanks = require('../model/bb.model');
const bcrypt = require('bcryptjs');

exports.getAllBloodBanks = async (req, res) => {
    bloodBanks.find()
        .then(bloodBanks => res.send(bloodBanks))
        .catch(err => res.status(400).send({
            message: err.message || "Error retrieving users"
        }))
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const oldUser = await bloodBanks.findOne({ email });
  
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

    const { email, name, mobile, Password, Address} = req.body;

    let oldUser = null;

    await bloodBanks.findOne({email})
        .then(data => {
            oldUser = data;
        });

    if(oldUser){
        return  res.status(200).send({success: false, message: "User already exists!"});
    }

    const hashedPassword = await bcrypt.hash(Password, 12);


    const newUser = new bloodBanks({
        email,
        name,
        mobile,
        Address,
        password: hashedPassword
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

exports.getBloodBank = async (req,res)=>{
    const {id} = req.params;
    let oldUser = null;
    await bloodBanks.findById(id)
        .then(data => {
            oldUser = data;
        });
        if (!oldUser) return res.status(200).json({ success: false });
        return res.status(200).json({...oldUser,success:true});
}