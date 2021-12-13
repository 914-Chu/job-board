export default function (router, path) {

    const homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        res.sendFile(path.join(__dirname, "../..", "client", "build", "index.html"));
    });

    return router;
}