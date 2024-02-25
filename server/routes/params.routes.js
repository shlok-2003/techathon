import express from 'express';
const router = express.Router();

import { putParams, getParams } from '../controllers/params.js';
import { getMerits, getSocial, getAllMerits } from '../controllers/merits.js';

router.post('/postParams', putParams);
router.get('/getParams', getParams);

router.get('/getMerits', getMerits);
router.get('/getSocial', getSocial);
router.get('/getAllMerits', getAllMerits);


export default router;
