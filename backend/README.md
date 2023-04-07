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
- [cors](https://www.npmjs.com/package/cron) - Bypass Cross Origin Policy to allow access from different domain
- [cron](https://www.npmjs.com/package/cron) - A library used to schedule the scraping function to run at regular intervals.
- [moment](https://www.npmjs.com/package/moment) - A library used to parse, validate, manipulate, and display dates and times in javascript.
- [typescript](https://www.npmjs.com/package/typescript) - A typed superset of javascript used to improve overall code quality and readability.
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

### Endpoints

#### Deals
- `/api/v1/deals` - Returns all the deals in the database
    - Method: `GET`

- `/api/v1/deals/trending` - Returns the latest deal
    - Method: `GET`

- `/api/v1/deals` - Adds a new deal to the database
    - Method: `POST`
    - Body: `Deal`

- `/api/v1/deals` - Deletes all the deals from the database
    - Method: `DELETE`

- `/api/v1/deals/:id` - Returns a specific deal from the database
    - Method: `GET`


- `/api/v1/deals/:id` - Deletes a specific deal from the database
    - Method: `DELETE`

#### Users
- `/api/v1/users` - Returns all the users in the database
    - Method: `GET`

- `/api/v1/users` - Adds a new user to the database
    - Method: `POST`
    - Body: `User`

- `/api/v1/users/:username` - Returns a specific user from the database
    - Method: `GET`

- `/api/v1/users/:username` - Deletes a specific user from the database
    - Method: `PUT`
    - Body: `User`

- `/api/v1/users/:username` - Deletes a specific user from the database
    - Method: `DELETE`

#### Scrapes
- `/api/v1/scrapes` - Returns all the scrape results in the database
    - Method: `GET`

- `/api/v1/scrapes/latest` - Returns the latest scrape result
    - Method: `GET`

- `/api/v1/scrapes/limit/:limit` - Returns the latest scrape result
    - Method: `GET`

## Running Locally
```bash
git clone git@github.com:xxiz/CPSC-2600-Project.git
cd CPSC-2600-Projecthttps://api.a7.wtf
docker-compose up -d # if you are going to run a mongodb locally, if not skip this step and refer to the note below
npm install
npm run dev
```
**NOTE**: You will need to create a `.env` file in the root directory of the project with the following variables:
```bash
MONGO_URI=<MONGO_URI>
```
