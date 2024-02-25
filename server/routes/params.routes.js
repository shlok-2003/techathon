import express from 'express';
const router = express.Router();

import { putParams, getParams } from '../controllers/params.js';

router.post('/postParams', putParams);
router.get('/getParams', getParams);

export default router;
