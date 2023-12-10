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
