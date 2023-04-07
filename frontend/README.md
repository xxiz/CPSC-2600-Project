# Frontend
The frontend is built using React and is responsible for providing the user interface for the SalesScout application. Users can sign up by providing a username and customizing their webhook URLs. The frontend retrieves the data from the backend via a REST API and displays the information to the user.

## Overview

### Stack
- **UI Library**: `React`
- **HTTP Client**: `Axios`

### Packages
- `react-router-dom` - A library used to handle client-side routing in the application
- `tailwindcss` - A utility-first CSS framework used to style the application
- `react-hot-toast` - A library used to display toast messages to the user

### Project
- `public/` - Contains the static assets and HTML file for the application
- `src/`
    - `components/*` - Contains the React components for the application
    - `pages/*` - Contains the pages (routes) for the application
    - `types/*` - Contains all the types for the project
    - `App.tsx` - The main React component for the application
    - `index.tsx` - The entry point for the application
- `package.json` - Contains the dependencies and scripts for the application
- `webpack.config.js` - Contains the configuration for the webpack bundler

### Running Locally
To run the frontend locally, follow these steps:
1. Clone the repository
2. Navigate to the frontend directory `cd CPSC-2600-Project/frontend`
3. Install the necessary dependencies by running `npm install`
4. Run the development server using `npm run start`
