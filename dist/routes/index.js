import express from 'express';
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('home!');
});
router.get('/about', (req, res) => {
    res.send('about!');
});
export default router;
