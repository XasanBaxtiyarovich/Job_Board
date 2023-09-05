const router = require("express").Router();
const isAuth = require("../middlewares/is-auth.middleware");
const { createJob, getJobs, getJob, updateJob, deleteJob } = require("../controllers/job-placement.controller");

router.post("/create/job", isAuth, createJob);
router.get("/get/jobs", isAuth, getJobs);
router.get("/get/job/:id", isAuth, getJob);
router.put("/update/job/:id", isAuth, updateJob);
router.delete("/delete/job/:id", isAuth, deleteJob);

module.exports = router;