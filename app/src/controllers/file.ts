import { Client } from '../lib/config/sanity';
import { Request, Response } from 'express';

export const PostFile = async (request: Request, response: Response) => {
  try {
    if (!request.file) {
      return response.status(400).json({ error: 'No file uploaded' });
    } else {
      const fileBuffer = request.file.buffer;
      const postToSanity = await Client.assets.upload('file', fileBuffer, {
        filename: `${request.file.originalname}`,
      });
     return response.json({ url: postToSanity.url });
    }
  } catch (error) {
    const msg = 'Internal server error:';
    console.error(msg, error);
    return response.status(500).json({ error: msg, success: false });
  }
};
