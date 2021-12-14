import { MongoError } from 'mongodb';
import User from '../models/user';

export default function (router) {

    const usersRoute = router.route('/users');

    usersRoute.post( async (req, res) => {
        
        if (req.body.name && req.body.email) {
            User.create({
                    name:req.body.name,
                    email:req.body.email,
                    profilePic:req.body.profilePic,
                    savedJobs:req.body.savedJobs
                }, function (err, user) {
                    if (err) {
                        if ((err as MongoError).code && (err as MongoError).code === 11000) {
                            res.status(400);
                            res.json({message: "A user with the provided email already exists", data: req.body.email});
                        } else {
                            res.status(500);
                            res.json({message: "Unable to create new user", data: req.body});
                        }
                    } else {
                        res.status(201);
                        res.json({ message: 'New user created', data: user });
                    }
            });
        } else {
            res.status(400);
            res.json({message: "Please ensure a name and email are provided.", data: req.body});
        }
    });

    return router;
}