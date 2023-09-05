const {Schema, model} = require("mongoose");

const schema = new Schema(
    {
        job_title: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            require: true
        },
        working_time: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        number_of_applicants: {
            type: Number,
            required: true,
            default: 0
        },
        create_user_id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Job", schema);