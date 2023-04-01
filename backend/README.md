# Backend
The backend runs on Express and automatically scrapes the RedFlagDeals forum and scrapes it for the latest deals and uploads it to the database. The backend also has a REST API that allows the frontend to access the data, and certain protected routes to allow the admin to add new deals or delete deals from the database (due to time limitations I was unable to implement a login system for the admin).

## Overview
### Stack
- **Runtime**: [NodeJS](https://nodejs.org/en/)
- **Web Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)

### Packages
- [axios](https://www.npmjs.com/package/axios) is a promise based HTTP client to make HTTP requests to the RedFlagDeals forum
- [cheerio](https://www.npmjs.com/package/cheerio) is a library to parse HTML
- [node-cron](https://www.npmjs.com/package/node-cron) is a library to run a function on a schedule
- [dotenv](https://www.npmjs.com/package/dotenv) is a library to load environment variables from a .env file
- [mongoose](https://www.npmjs.com/package/mongoose) is an Object Data Modeling (ODM) library for MongoDB and NodeJS
- [nodemon](https://www.npmjs.com/package/nodemon) is a library to automatically restart the server when changes are made
- [typescript](https://www.npmjs.com/package/typescript) is a typed superset of javascript which improves overall code quality and readability
- [eslint](https://www.npmjs.com/package/eslint) is a library to lint the code to improve code quality
- [moment](https://www.npmjs.com/package/moment) is a library to parse, validate, manipulate, and display dates and times in javascript

### Project
- `dist/*` - Contains the compiled typescript files
- `src/`
    - `controllers/*` - Contains the controllers for the REST API
    - `db/conn.ts` - The connection to the database
    - `models/*` - Contains the models for the database
    - `routes/*` - Contains the routes for the REST API
    - `types/index.ts` - Contains the types for the Express application
    - `util/s*` - Contains the utils to scrape, and update the database
    - `app.ts` - Index file for the Express application
- `tsconfig.json` - Typescript configuration file, for more information see [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- `tsconfig.tsbuildinfo` - Typescript build information file, for more information see [here](https://www.typescriptlang.org/tsconfig#tsBuildInfoFile)

## Running Locally
```bash
git clone git@github.com:xxiz/CPSC-2600-Project.git
cd CPSC-2600-Project/backend
npm install
npm run dev
```
**NOTE**: You will need to create a `.env` file in the root directory of the project with the following variables:
```bash
MONGO_URI=<MONGO_URI>
```