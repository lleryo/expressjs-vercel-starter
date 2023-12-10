import express from 'express';
import { upload } from '../lib/config/multer';
import { PostFiles } from '../controllers/files';

const router = express.Router();

router.post('/', upload.array('files', 5), PostFiles);

export = router;
