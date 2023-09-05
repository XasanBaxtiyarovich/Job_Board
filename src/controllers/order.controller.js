const Orders = require("../models/order.model");

const createOrder = async(req, res) => {
    try {
        const {job_id} = req.body;

        const user_id = req.idUser;
    
        const newOrder = await Orders.create({user_id: user_id, job_id: job_id});

        res.status(200).json({message: "Success", order: newOrder});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getOrders = async(req, res) => {
    try {
        const orders = await Orders.find();

        res.json({message: "Success", Orders: orders});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getOrder = async(req, res) => {
    try {
        const {id} = req.params;

        const order = await Orders.findById(id);

        res.json({message: "Success", Order: order});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const deleteOrder = async(req, res) => {
    try {
        const {id} = req.params;

        await Orders.deleteMany({_id: id});
    
        res.status(201).json({message: "Success"});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {createOrder, getOrders, getOrder, deleteOrder};