const bcrypt = require("bcrypt");

const Users = require("../models/user.model");
const {sign} = require("../utils/jwt");

const authRegister = async (req, res) => {
    try {
        const {fullName, password} = req.body;

        const findUser = await Users.findOne({fullName});

        if(findUser) return res.status(403).json({message: "Full name already exists"});

        const hashedPass = await bcrypt.hash(password, 12);

        const newUser = await Users.create({fullName: fullName, password: hashedPass});

        const token = sign({id: newUser._id})
        
        res.status(201).json({message: "Success", data: token});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const authLogin = async (req, res) => {
    try {
        const {fullName, password} = req.body;

        const findUser = await Users.findOne({fullName});

        if(!findUser) return res.status(403).json({message: "Invalid full name or password"});
        
        const comparePass = await bcrypt.compare(password, findUser.password);

        if(!comparePass) return res.status(403).json({message: "Invalid full name or password"});

        const token = sign({id: findUser._id})

        res.status(201).json({message: "Success", data: token});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {authRegister, authLogin};