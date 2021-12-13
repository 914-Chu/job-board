module.exports = function (app, router, path) {
    app.use('/api', require('./home.js')(router, path));
    app.use('/api/jobs', require('./jobs.js')(router));
    app.use("*", require('./home.js')(router, path));
};