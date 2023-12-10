import multer from 'multer';

const storageEngine = multer.memoryStorage();

/**
 * Exported Multer Instance
 * The 'upload' Multer instance is exported for use in other parts of the application.
 */
const upload = multer({ storage: storageEngine });

export { upload };
