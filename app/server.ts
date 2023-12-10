import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import TTS from './src/routes/tts';
import File from './src/routes/file';
import Files from './src/routes/files';

const PORT = process.env.PORT || 8000;

const server = express();

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders(res: express.Response) {
    res.set('x-static-timestamp', Date.now().toString());
  },
};

server.use(morgan('dev'));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public'), options));

console.log('Dir: ', express.static(path.join(__dirname, 'public'), options));

server.get('/api', (_req, res: express.Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'Hello world' });
});

server.use('/api/v1/files', Files);
server.use('/api/v1/file', File);
server.use('/api/v1/tts', TTS);

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
