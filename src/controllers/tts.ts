import AWS from 'aws-sdk';
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from '../lib/config/env';
import { Client } from '../lib/config/sanity';
import { Request, Response } from 'express';

const MAX_TEXT_LENGTH = 3000;

export const PostTTS = async (request: Request, response: Response) => {
  try {
    console.log(request.body);
    const { plainText } = request.body;

    if (!plainText) {
      return response.status(400).json({ error: 'No text provided' });
    }

    const polly = new AWS.Polly({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    const textChunks = [];
    for (let i = 0; i < plainText.length; i += MAX_TEXT_LENGTH) {
      textChunks.push(plainText.substring(i, i + MAX_TEXT_LENGTH));
    }

    const audioStreams = [];

    for (const chunk of textChunks) {
      const params = {
        Text: chunk,
        OutputFormat: 'mp3',
        VoiceId: 'Joanna',
      };
      const result = await polly.synthesizeSpeech(params).promise();
      audioStreams.push(result?.AudioStream);
    }

    // Combine the audio streams into a single stream
    const combinedAudioStream = Buffer.concat(audioStreams as any);

    const sanityAudioURL = await Client.assets.upload(
      'file',
      combinedAudioStream,
      { filename: `audio/mpeg` }
    );
    console.log('sanityAudioURL: ', sanityAudioURL);

    const url = sanityAudioURL.url;

    console.log('url: ', url);

    return response.status(201).json({ url });
  } catch (error) {
    const msg = 'Internal server error:';
    console.error(msg, error);
    return response.status(500).json({ error: msg, success: false });
  }
};
