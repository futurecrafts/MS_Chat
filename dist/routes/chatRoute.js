import express from 'express';
var router = express.Router();
router.get('/about', (req, res) => {
    res.send('about!!!!');
});
router.get('/chat', async (req, res) => {
    res.send('chat!!!!');
});
export default router;
