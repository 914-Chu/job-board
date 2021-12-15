import Review from '../models/review';
import Job from '../models/job';

export default function (router) {

    const reviewsRoute = router.route('/reviews');

    reviewsRoute.get(async (req, res) => {
        const findFilter = req.query.where ? JSON.parse(req.query.where): {};

        Review.find(findFilter).exec( function (err, reviews) {
            if (err) {
                res.status(500);
                res.json({message: "Unable to find reviews", data: "" });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: reviews });
            }
        });
    });

    reviewsRoute.post( async (req, res) => {

        const requiredFieldsAreProvided = req.body.overall
            && req.body.workLifeBalance 
            && req.body.culture
            && req.body.transportation
            && req.body.flexibility
            && req.body.headline
            && req.body.reviewText
            && req.body.jobReviewed
            && req.body.reviewerName;
        
        if (requiredFieldsAreProvided) {
            Review.create({
                    overall:req.body.overall,
                    workLifeBalance:req.body.workLifeBalance,
                    culture:req.body.culture,
                    transportation:req.body.transportation,
                    flexibility:req.body.flexibility,
                    headline:req.body.headline,
                    reviewText:req.body.reviewText,
                    jobReviewed:req.body.jobReviewed,
                    reviewerName:req.body.reviewerName
                }, function (err, review) {
                    if (err) {
                        res.status(500);
                        res.json({message: "Unable to create new review", data: req.body});
                    } else {

                        Job.findById(req.body.jobReviewed, function (err, job) {
                            const newJob = {
                                title:job.title,
                                description:job.description,
                                externalLink:job.externalLink,
                                location:job.location,
                                hourlyPay:job.hourlyPay,
                                employmentType:job.employmentType,
                                weeklyHours:job.weeklyHours,
                                ratingTotals:job.ratingTotals,
                                numberReviews:job.numberReviews,
                            };
                      
                            newJob.ratingTotals[0] += req.body.overall;
                            newJob.ratingTotals[1] += req.body.workLifeBalance;
                            newJob.ratingTotals[2] += req.body.culture;
                            newJob.ratingTotals[3] += req.body.transportation;
                            newJob.ratingTotals[4] += req.body.flexibility;
                            newJob.numberReviews += 1;

                            Job.findByIdAndUpdate({_id:req.body.jobReviewed}, newJob,
                                function (err, job) {
                                    if (err) {
                                        res.status(500);
                                        res.json({
                                            message: "Unable to update job review fields",
                                            data: req.body.jobReviewed
                                        });
                                    }
                            });
                        });

                        res.status(201);
                        res.json({ message: 'New review created', data: review });
                    }
            });
        } else {
            res.status(400);
            res.json({message: "Please ensure all required fields are provided.", data: req.body});
        }
    });

    return router;
}