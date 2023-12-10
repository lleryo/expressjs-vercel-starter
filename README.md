# Express.js Vercel Starter

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)](https://github.com/Clogarr/expressjs-vercel-starter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Welcome to Express.js Vercel Starter 👋

Express.js Vercel Starter is a minimalistic and versatile boilerplate for web development, combining the powerful Express.js framework with the deployment capabilities of Vercel.

🏠 [Homepage](https://expressjsvercelstarter.vercel.app)
✨ [Demo](https://expressjsvercelstarter.vercel.app)

## Project Overview

### Description

Express.js Vercel Starter is designed to streamline the development and deployment of web applications using Express.js and Vercel. It provides a solid foundation for building scalable and maintainable projects.

### Folder Structure

```sh
.
├── api
│   └── index.ts
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── style.css
├── src
│   ├── controllers
│   │   ├── files.ts
│   │   ├── file.ts
│   │   └── tts.ts
│   ├── lib
│   │   └── config
│   │       ├── env.ts
│   │       ├── multer.ts
│   │       └── sanity.ts
│   ├── routes
│   │   ├── files.ts
│   │   ├── file.ts
│   │   └── tts.ts
│   └── server.ts
├── tsconfig.json
└── vercel.json

```

## Environment Variables

The following environment variables are utilized:

```sh
AWS_ACCESS_KEY_ID=''
AWS_SECRET_ACCESS_KEY=''
AWS_REGION=''

SANITY_SECRET_TOKEN=''
SANITY_API_VERSION=''
SANITY_PROJECT_ID=''
SANITY_DATASET=''
```


## API Endpoint Overview

The project provides the following API endpoints, each serving a specific purpose:

### Files Endpoint: `/api/v1/files`

This endpoint handles operations related to files. Users can interact with the API to upload multiples files and get URL from the files uploaded.

### File Endpoint: `/api/v1/file`

The file endpoint is responsible for single file uploads. It allows users to one file and get URL of the file uploaded.

### Text-to-Speech (TTS) Endpoint: `/api/v1/tts`

The TTS endpoint provides functionality for converting text to speech. Users can send text data to this endpoint, and the server will respond with an audio file generated from the provided text.

These API endpoints collectively form the core functionality of the Express.js Vercel Starter, offering a flexible and scalable solution for file and text processing.


## Packages Used

The project utilizes the following packages:

### Development Dependencies

- **@types/cors:**
  - Provides TypeScript type definitions for the `cors` package, enabling type checking and editor support.

- **@types/express:**
  - Offers TypeScript type definitions for the Express.js framework, enhancing code quality and development experience.

- **@types/helmet:**
  - Provides TypeScript type definitions for the `helmet` package, ensuring type safety and code completion.

- **@types/morgan:**
  - Offers TypeScript type definitions for the `morgan` package, enhancing the developer experience with type-aware code.

- **@types/multer:**
  - Provides TypeScript type definitions for the `multer` package, enabling type-safe interactions with the file upload middleware.

- **@types/node:**
  - Supplies TypeScript type definitions for Node.js core modules, facilitating type-checking for Node.js-specific functionality.

- **@typescript-eslint/eslint-plugin:**
  - Integrates ESLint with TypeScript, enabling linting for TypeScript code and enforcing coding standards.

- **autoprefixer:**
  - A PostCSS plugin that automatically adds vendor prefixes to CSS properties, ensuring cross-browser compatibility.

- **eslint:**
  - A pluggable linting utility for JavaScript and TypeScript, enforcing code style and identifying potential issues.

- **eslint-config-standard-with-typescript:**
  - An ESLint configuration that combines the StandardJS style guide with TypeScript support, maintaining code consistency.

- **eslint-plugin-import:**
  - ESLint plugin that provides linting rules for ES6 import statements, ensuring correct usage and preventing common mistakes.

- **eslint-plugin-n:**
  - An ESLint plugin that enforces version-specific Node.js rules, improving compatibility and preventing usage of unsupported features.

- **eslint-plugin-promise:**
  - ESLint plugin that adds linting rules related to JavaScript Promises, promoting best practices and preventing common errors.

- **nodemon:**
  - Monitors files for changes and automatically restarts the Node.js application during development, improving the development workflow.

- **typescript:** 
  - The TypeScript programming language compiler, enabling the use of TypeScript in the project for static typing and improved code quality.

### Dependencies

- **aws-sdk:**
  - The AWS SDK for JavaScript, enabling interaction with various Amazon Web Services (AWS) from the Node.js environment.

- **cors:** 
  - Middleware for handling Cross-Origin Resource Sharing (CORS) in Express.js applications, allowing controlled access to resources from different origins.

- **dotenv:**
  - A zero-dependency module that loads environment variables from a `.env` file into `process.env`, simplifying configuration management.

- **express:**
  - Fast, unopinionated, minimalist web framework for Node.js, providing a robust foundation for building web applications and APIs.

- **helmet:**
  - A collection of middleware functions to secure Express.js applications by setting various HTTP headers, enhancing security.

- **morgan:**
  - HTTP request logger middleware for Node.js, providing detailed logging information during development and debugging.

- **multer:**
  - A middleware for handling `multipart/form-data`, primarily used for file uploads in Express.js applications.

- **next-sanity:** 
  - A Next.js utility for integrating with the Sanity CMS, simplifying the process of fetching data from Sanity in Next.js applications.



## Configuration

No configuration is needed from the user; everything has been set up automatically. Users can modify the entire codebase and add more files to the public directory. Leave the `api` directory as is.

## Getting Started

### Installation

```sh
npm install
```
### Usage
Clone the Repository

```sh
git clone https://github.com/Clogarr/expressjs-vercel-starter
```
### Develop

Create a `.env` file from `.env.example`, then run the following command:

```sh
npm run dev
```
## Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FClogarr%2Fexpressjs-vercel-starter)

#### Prerequisites

- Install [Vercel CLI](https://vercel.com/download)

#### Steps

1. Click on the "Deploy with Vercel" button on your project's repository page.
2. If prompted, log in to your Vercel account or create a new account.
3. Select the repository that you want to deploy.
4. Click on "Deploy." Vercel will automatically build and deploy your project.

Your project should now be live and accessible at the URL provided by Vercel.

## Built with

- [Express.js](https://expressjs.com/en/5x/api.html) - Fast, unopinionated, minimalist web framework for Node.js.
- [Vercel](https://vercel.com/docs) - The platform for serverless deployment and serverless functions.

## Useful Links

- [Using Express.js with Vercel – Vercel Docs](https://vercel.com/guides/using-express-with-vercel)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Limits](https://vercel.com/docs/limits/overview)

## Author

👤 **Clogarr**
👤 **Rocky Essel**

- GitHub: [@Clogarr](https://github.com/Clogarr)
- GitHub: [@rockyessel](https://github.com/rockyessel)

## Show your support
Give a ⭐️ if this project helped you!
