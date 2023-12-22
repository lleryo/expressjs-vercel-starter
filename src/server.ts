import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
// import helmet from 'helmet';

import TTS from './routes/tts';
import File from './routes/file';
import Files from './routes/files';

const PORT = process.env.PORT || 8000;

const server = express();

server.use(morgan('dev'));
server.use(cors());
// server.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
//         styleSrc: ["'self'", 'fonts.googleapis.com'],
//       },
//     },
//   })
// );

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, '../public')));

console.log('Dir: ', path.join(__dirname, '../public'));

server.use('/api/v1/files', Files);
server.use('/api/v1/file', File);
server.use('/api/v1/tts', TTS);

server.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);

export default server;
