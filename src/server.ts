import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet';
import Files from '../src/routes/files';
import File from '../src/routes/file';
import TTS from '../src/routes/tts';

const PORT = process.env.PORT || 8000;

const server = express();

dotenv.config({ path: '.env' });

server.use(morgan('dev'));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/api/v1/files', Files);
server.use('/api/v1/file', File);
server.use('/api/v1/tts', TTS);

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
