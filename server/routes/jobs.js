const Job = require('../models/job');

module.exports = function (router) {

    var jobsRoute = router.route('/jobs');

    jobsRoute.get(async (req, res) => {
        Job.find().exec( function (err, jobs) {
            if (err) {
                res.status(500);
                res.json({message: "Unable to find jobs", data: "" });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: jobs });
            }
        });
    });

    return router;
}