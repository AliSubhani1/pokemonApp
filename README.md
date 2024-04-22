## Initial Setup

## Clone the Repository or Download the Code:

- First, obtain a copy of the project code. You can do this by cloning the project repository using Git or by downloading the source code directly from the project's page.

## Open Project Folder in Visual Studio Code:

- Launch Visual Studio Code.
- Navigate to File > Open Folder... and select the project folder you've just cloned or downloaded.

## Install Dependencies:

- Open the integrated terminal in VS Code by navigating to Terminal > New Terminal.
- Run the following command to install all the necessary dependencies listed in the package.json file:

npm install

## Configure Environment Variables:

- Create a .env file in the root directory of the project. Add the value of the env variable. Currently, we only have one variable with following value (Just providing value to run the project. I know its not a secure way to share this detail in read me),

REACT_APP_API_BASE_URL=https://pokeapi.co/api/v2/

## Launch the Project:

- Once all dependencies are installed and the .env file is configured, run the following command in the VS Code terminal to start the project:

npm run start

- This command launches a development server and opens the project in your default web browser.

## Accessing the Project:

- Open http://localhost:3000 in your browser to view the project
