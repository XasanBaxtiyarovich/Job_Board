const Jobs = require("../models/job-placement.model");

const createJob = async(req, res) => {
    try {
        const {job_title, salary, working_time, description, number_of_applicants} = req.body;
        const create_user_id = req.idUser;

        const newJob = await Jobs.create({job_title, salary, working_time, description, number_of_applicants, create_user_id});

        res.status(201).json({message: "Success", Job: newJob});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const getJobs = async(req, res) => {
    try {
        const jobs = await Jobs.find();

        res.json({Jobs: jobs});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const getJob = async(req, res) => {
    try {
        const {id} = req.params;

        const job = await Jobs.findById(id);

        res.json({message: "Success", Job: job});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const updateJob = async(req, res) => {
    try {
        const {job_title, salary, working_time, description, number_of_applicants} = req.body;
        const {id} = req.params;
        
        const updateDate = await Jobs.updateOne({_id: id}, {$set: {job_title, salary, working_time, description, number_of_applicants}, $setOnInsert: { dateAdded: new Date() }}, { upsert: true });

        res.status(201).json({message: "Success"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

const deleteJob = async(req, res) => {
    try {
        const {id} = req.params;

        await Jobs.deleteMany({_id: id});
    
        res.json({message: "Success"})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

module.exports = {createJob, getJobs, getJob, updateJob, deleteJob};