# pet_Listing_website

# Overview

This is a React.js project for a Pet Listing website. It includes error handling, state management, and follows best coding practices, including the use of ESLint and Webpack/Vite for bundling and development server.

Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Available Script](#available-scripts)
- [License](#license)

# Features

- List and view details of pets
- Search pets by animal type, location, and breed
- Error handling with user-friendly messages
- Global state management using React Context
- Responsive design with Tailwind CSS

#Getting Started

#Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

# Installation

1. Clone the repository:
git clone https://github.com/Kalyani77032e/pet-listing.git
 cd pet-listing
2.install dependencies:
npm install 
3.Create a .env file in the root directory and add the following:
VITE_API_BASE_URL=http://pets-v2.dev-apis.com

# usage
1.Start the development server:
npm run dev

2.open your browser and navigate to:
http://localhost:5173

# project structure 

pet-listing/
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.js
│   │   ├── PetDetails.js
│   │   ├── PetList.js
│   │   └── SearchForm.js
│   ├── context/
│   │   └── PetContext.js
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   ├── index.js
│   └── .env
├── .eslintrc.js
├── .prettierrc
├── package.json
├── vite.config.js
└── README.md

Explanation of Project Structure
1.public/: Contains static assets.
2.src/: Contains the main source code for the application.
3.components/: Contains React components used throughout the application.
ErrorBoundary.js: Handles errors gracefully by displaying a fallback UI.
PetDetails.js: Displays details of a selected pet.
PetList.js: Displays a list of pets.
SearchForm.js: Allows users to search for pets based on animal type, location, and breed.
context/: Contains context providers for state management.
PetContext.js: Provides global state for pets.
services/: Contains modules for making API calls.
api.js: Handles HTTP requests to the pet listing API.
utils/: Utility functions (if any).
styles/: Contains CSS files for styling.
index.css: Main stylesheet for the application.
App.js: Main application component.
index.js: Entry point of the application.
.env: Environment variables configuration file.


# API Endpoints
List of Pets:

URL: http://pets-v2.dev-apis.com/pets
Description: Fetches a list of pets.
Pets by ID:

URL: http://pets-v2.dev-apis.com/pets?id=${id}
Description: Fetches a pet's details by its ID.
Breed by Animal Type:

URL: http://pets-v2.dev-apis.com/breeds?animal=${animal}
Description: Fetches breeds for a specific animal type.
Search API:

URL: http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
Description: Searches for pets based on animal type, location, and breed.

# Available Scripts
In the project directory, you can run:

npm run dev: Starts the development server.
npm run build: Builds the app for production to the dist folder.
npm run serve: Serves the production build locally.
npm run lint: Runs ESLint to lint the code.
npm run format: Runs Prettier to format the code.


# License
This project is licensed under the MIT License.
This `README.md` file provides clear instructions on setting up and running the project, a detailed project structure,etc Make sure to replace `https://github.com/Kalyani77032/pet_listing_website.git` with the actual URL of your GitHub repository.