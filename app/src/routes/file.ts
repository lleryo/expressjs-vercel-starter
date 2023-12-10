import express from 'express';
import { upload } from '../lib/config/multer';
import { PostFile } from '../controllers/file';

const router = express.Router();
router.post('/', upload.single('file'), PostFile);

export = router;
