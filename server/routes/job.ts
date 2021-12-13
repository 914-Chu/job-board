import Job from '../models/job';

export default function (router) {

    const jobRoute = router.route('/jobs/:id');

    jobRoute.get(async (req, res) => {
        Job.findById(req.params.id, function (err, job) {
            if (!job) {
                res.status(404);
                res.json({message: "Job with provided id does not exist", data: req.params.id });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: job });
            }
        });
    });

    // jobRoute.put (async (req, res) => {
    //     const requiredFieldsAreProvided = req.body.title
    //         && req.body.description 
    //         && req.body.externalLink
    //         && req.body.location
    //         && req.body.hourlyPay
    //         && req.body.employmentType
    //         && req.body.weeklyHours;

    //     if (requiredFieldsAreProvided) {
    //         Job.findByIdAndUpdate(
    //             {_id:req.params.id},
    //             {   title:req.body.title,
    //                 description:req.body.description,
    //                 externalLink:req.body.externalLink,
    //                 location:req.body.location,
    //                 hourlyPay:req.body.hourlyPay,
    //                 employmentType:req.body.employmentType,
    //                 weeklyHours:req.body.weeklyHours,
    //                 tags:req.body.tags,
    //                 relatedMajors:req.body.relatedMajors,
    //                 postAuthor:"Get author info to populate this"
    //             },
    //             function (err, job) {
    //                 if (!job) {
    //                     res.status(404);
    //                     res.json({message: "Job with provided id does not exist", data: req.params.id });
    //                 } else {
    //                     if (err) {
    //                         if (err.code && err.code === 66) {
    //                             res.status(400);
    //                             res.json({message: "The _id field of a job can not be updated", data: req.body});
    //                         } else {
    //                             res.status(500);
    //                             res.json({message: "Unable to get job with provided id", data: req.params.id });
    //                         }
    //                     } else {
    //                         res.status(200);
    //                         res.json({ message: 'OK', data: job });
    //                     }
    //                 }
    //         });
    //     } else {
    //         res.status(400);
    //         res.json({message: "Please ensure all required fields are provided", data: req.body});
    //     }
    // })

    jobRoute.delete( async (req, res) => {
        Job.findByIdAndDelete(req.params.id, function (err, job) {
            if (!job) {
                res.status(404);
                res.json({message: "Job with provided id does not exist", data: req.params.id });
            } else {
                if (err) {
                    res.status(500);
                    res.json({message: "Unable to delete job with provided id", data: req.params.id });
                } else {
                    res.status(200);
                    res.json({ message: 'Job deleted', data: req.params.id });
                }
            }
        });
    });

    return router;
}