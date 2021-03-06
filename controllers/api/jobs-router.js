const router = require("express").Router();
const { Job } = require("../../models");
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
// dayjs.extend(relativeTime);

// const now = dayjs();

router.post("/", async (req, res) => {
    try {
        const {job_name, description, price, zipcode, contact_email } = req.body;
        const newJob = await Job.create({
            job_name,
            description,
            price,
            zipcode,
            user_id: req.session.userId,
            contact_email,
            time: now.format()
        });
        if (!job_name || !description || !price || !zipcode || !contact_email) {
            res
            .status(404)
            .json({
                message: "Please make sure you complete the following boxes",
            });
            return;
        }
        res.status(200).json(newJob);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// ADD WITHAUTH LATER ON
router.delete("/:id", async (req, res) => {
    try {
      const jobData = await Job.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;