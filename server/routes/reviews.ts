import Review from '../models/review';

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