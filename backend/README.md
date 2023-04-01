# Backend
The backend runs on Express and automatically scrapes the RedFlagDeals forum and scrapes it for the latest deals and uploads it to the database. The backend also has a REST API that allows the frontend to access the data, and certain protected routes to allow the admin to add new deals or delete deals from the database (due to time limitations I was unable to implement a login system for the admin).

## Overview
### Stack
- **Runtime**: [NodeJS](https://nodejs.org/en/)
- **Web Framework**: [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)

### Packages
- [axios](https://www.npmjs.com/package/axios) - A promise based HTTP client used to make HTTP requests to the RedFlagDeals forum to scrape the latest deals.
- [cheerio](https://www.npmjs.com/package/cheerio) - A library used to parse HTML and extract the relevant data from the scraped pages.
- [dotenv](https://www.npmjs.com/package/dotenv) - A library used to load environment variables from a .env file, which includes the database connection string.
- [mongoose](https://www.npmjs.com/package/mongoose) - An Object Data Modeling (ODM) library used to interact with the MongoDB database where the deals are stored.
- [node-cron](https://www.npmjs.com/package/node-cron) - A library used to schedule the scraping function to run at regular intervals.
- [moment](https://www.npmjs.com/package/moment) - A library used to parse, validate, manipulate, and display dates and times in javascript.
- [typescript](https://www.npmjs.com/package/typescript) - A typed superset of javascript used to improve overall code quality and readability.
- [eslint](https://www.npmjs.com/package/eslint) - A library used to lint the code to improve code quality.
- [nodemon](https://www.npmjs.com/package/nodemon) - A library used to automatically restart the server when changes are made during development.

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