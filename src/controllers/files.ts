
import { Request, Response } from 'express';
import { Client } from '../lib/config/sanity';


export const PostFiles = async (request: Request, response: Response) => {
  try {
    const files = request?.files;
    if (Array.isArray(files)) {
      const createFiles = files.map(async (file) => {
        try {
          console.log('file: ', file);
          const postToSanity = await Client.assets.upload('file', file.buffer, {
            filename: file.originalname,
          });
          return postToSanity.url;
        } catch (error) {
          console.error('Error uploading file:', error);
          response
            .status(400)
            .json({ error: 'Error uploading file.', success: false });
          throw error;
        }
      });
      const url = await Promise.all(createFiles);
      response.status(201).json({ url });
    }
  } catch (error) {
    const msg = 'Internal server error:';
    console.error(msg, error);
    response.status(500).json({ error: msg, success: false });
  }
};
