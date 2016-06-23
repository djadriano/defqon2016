import express from 'express';
import path from 'path';
import cors from 'cors';

const router = express.Router();

router.get('/socket.io', cors(), (req, res) => {
  // res.render('index.html');
});

export default router;
