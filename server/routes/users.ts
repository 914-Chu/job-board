import { MongoError } from 'mongodb';
import User from '../models/user';

export default function (router) {

    const usersRoute = router.route('/users');

    usersRoute.get(async (req, res) => {
        User.find().exec( function (err, users) {
            if (err) {
                res.status(500);
                res.json({message: "Unable to find users", data: "" });
            } else {
                res.status(200);
                res.json({ message: 'OK', data: users });
            }
        });
    });

    usersRoute.post( async (req, res) => {
        
        if (req.body.name && req.body.email) {
            User.create({
                    name:req.body.name,
                    email:req.body.email
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