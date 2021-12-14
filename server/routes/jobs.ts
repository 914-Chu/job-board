import Job from '../models/job';

export default function (router) {

    const jobsRoute = router.route('/jobs');

    jobsRoute.get(async (req, res) => {
        const findFilter = req.query.where ? JSON.parse(req.query.where): {};
        const skipNum = req.query.skip ? parseInt(req.query.skip) : 0;
        const limitNum = req.query.limit ? parseInt(req.query.limit) : 0;

        Job.find(findFilter).skip(skipNum).limit(limitNum).exec( function (err, jobs) {
            if (err) {
                res.status(500);
                res.json({message: "Unable to find jobs", data: "" });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: jobs });
            }
        });
    });

    jobsRoute.post( async (req, res) => {

        const requiredFieldsAreProvided = req.body.title
            && req.body.description 
            && req.body.externalLink
            && req.body.location
            && req.body.hourlyPay
            && req.body.employmentType
            && req.body.weeklyHours;
        
        if (requiredFieldsAreProvided) {

            Job.create({
                    title:req.body.title,
                    description:req.body.description,
                    externalLink:req.body.externalLink,
                    location:req.body.location,
                    hourlyPay:req.body.hourlyPay,
                    employmentType:req.body.employmentType,
                    weeklyHours:req.body.weeklyHours,
                    tags:req.body.tags,
                    relatedMajors:req.body.relatedMajors,
                    postAuthor:"Get author info to populate this"
                }, function (err, job) {
                if (err) {
                    res.status(500);
                    console.log(err);
                    res.json({message: "Unable to create new job", data: req.body});
                } else {
                    res.status(201);
                    res.json({ message: 'New job created', data: job });
                }
            });
        } else {
            res.status(400);
            res.json({message: "Please ensure all required fields are populated.", data: req.body});
        }
    });

    return router;
}