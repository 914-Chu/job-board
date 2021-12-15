import User from '../models/user';

export default function (router) {

    const userRoute = router.route('/users/:email');

    userRoute.get(async (req, res) => {
        User.find({email:req.params.email}, function (err, resData) {
            if (resData.length === 0) {
                res.status(404);
                res.json({message: "User with provided email does not exist", data: req.params.email });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: resData });
            }
        });
    });

    return router;
}