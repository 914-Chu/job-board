import home from './home';
import jobs from './jobs';

export default function (app, router, path) {
    app.use('/api', home(router, path));
    app.use('/api/jobs', jobs(router));
    app.use("*", home(router, path));
}
