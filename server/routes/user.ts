import User from '../models/user';

export default function (router) {

    const userRoute = router.route('/users/:id');

    userRoute.get(async (req, res) => {
        User.findById(req.params.id, function (err, user) {
            if (!user) {
                res.status(404);
                res.json({message: "User with provided id does not exist", data: req.params.id });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: user });
            }
        });
    });

    //TODO: add in PUT

    userRoute.delete( async (req, res) => {
        User.findByIdAndDelete(req.params.id, function (err, user) {
            if (!user) {
                res.status(404);
                res.json({message: "User with provided id does not exist", data: req.params.id });
            } else {
                if (err) {
                    res.status(500);
                    res.json({message: "Unable to delete user with provided id", data: req.params.id });
                } else {
                    res.status(200);
                    res.json({ message: 'User deleted', data: req.params.id });
                }
            }
        });
    });

    return router;
}