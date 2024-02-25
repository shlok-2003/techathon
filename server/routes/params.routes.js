import express from 'express';
const router = express.Router();

import { putParams, getParams } from '../controllers/params.js';
import { getMerits, getSocial } from '../controllers/merits.js';

router.post('/postParams', putParams);
router.get('/getParams', getParams);

router.get('/getMerits', getMerits);
router.get('/getSocial', getSocial);


export default router;
