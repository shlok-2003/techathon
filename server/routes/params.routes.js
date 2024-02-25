import express from 'express';
const router = express.Router();

import { putParams } from '../controllers/params.js';

router.post('/postParams', putParams);

export default router;
