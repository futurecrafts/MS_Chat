import { Router } from 'express';
export const defaultRoute = Router();
/* GET home page. */
defaultRoute.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
defaultRoute.get('/about', (req, res) => {
    res.send('about!');
});
