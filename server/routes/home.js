module.exports = function (router, path) {

    var homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        res.sendFile(path.join(__dirname, "../..", "client", "build", "index.html"));
    });

    return router;
}