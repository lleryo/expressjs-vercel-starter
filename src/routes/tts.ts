import express from 'express';
import { PostTTS } from '../controllers/tts';

const router = express.Router();
router.post('/', PostTTS);

export = router;
