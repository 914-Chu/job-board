import home from './home';
import jobs from './jobs';
import job  from './job';

export default function (app, router, path) {
    app.use('/api', home(router, path));
    app.use('/api/jobs', jobs(router));
    app.use('/api/jobs/:id', job(router));
    app.use("*", home(router, path));
}
