# social-network-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Task was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. The required stack includes Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, I have also used a native JavaScript `Date` object and Web API to format timestamps.

I have created a walkthrough video that demonstrates the functionality of the API using Insomnia after creating the API. A link to the video has been provided in the README below.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)
- [License](#license)

## Installation

​Install dependencies using:

    npm install

## Usage

Need to have MongoDB Compass installed locally to run the app.

Mock seeds have been created and will be added using the following:

    npm run seed

The application will then be invoked by using the following command:

    npm start

## Directory Structure

```md
.
├── config/
├── controllers/
├── models/
│ ├── Thought.js
│ ├── User.js
│ └── index.js
├── routes/
│ ├── api/
| | ├── thoughtRoutes.js
| | ├── userRoutes.js
| | └── index.js
│ └── index.js
├── utils/
├── .gitignore
├── README.md
├── LICENSE
├── package.json
├── README.md
└── index.js
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

## Setup

- Nodejs must be installed
- MongoDB Compass must be installed
- Insomnia was used to test routes
- Text editor (VS Code recommended)

## Demo

[![Watch the video](./assets/my-video-player.png)](https://watch.screencastify.com/v/J1ARaNg5oh2HtJBqz7RX)

## Acknowledgements

- https://www.npmjs.com/package/mongoose
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/nodemon

## Questions

Created by: [@moedaaboul](https://github.com/moedaaboul)

Feel free to contact me via [muhammad.daaboul1989@gmail.com](muhammad.daaboul1989@gmail.com)!

## License

This work is licensed under
[MIT](#).
