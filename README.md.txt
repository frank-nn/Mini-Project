Weather App

A simple weather application that displays current weather information for a city entered by the user. The app fetches data from the OpenWeather API and displays details such as temperature, humidity, wind speed, and weather conditions.

Features

Search for the current weather of any city.

Displays temperature, humidity, wind speed, and weather condition icons.

Responsive design for better usability on different devices.

Prerequisites

Before you begin, ensure you have the following installed on your machine:

A modern web browser (e.g., Chrome, Firefox, or Edge).

A text editor (e.g., VS Code, Sublime Text, or Notepad++).

===========================================================================================================================================================================================

Setup Instructions

Follow these steps to set up and run the project locally:

1. Clone the Repository

   git clone <repository_url>

   Replace <repository_url> with the actual URL of the GitHub repository.

2. Navigate to the Project Directory

   cd <project_directory>

   Replace <project_directory> with the name of the folder where the repository was cloned.

3. Install Dependencies (if applicable)

   - This project does not have any backend dependencies. If you plan to use a local server (e.g., with Node.js), ensure you have Node.js installed.

4. Open the Project in Your Text Editor

   - Launch your preferred text editor and open the project folder.

5. Open the Project in a Browser

   - Open the index.html file in your browser directly by double-clicking it or by using a live server extension in your text editor (e.g., Live Server in VS Code).

6. Add Your OpenWeather API Key

    - In the script.js file, replace the placeholder API key with your actual API key from OpenWeather:

const apiKey = "<your_api_key>";

You can obtain an API key by signing up on the OpenWeather website.

===========================================================================================================================================================================================


Project Structure

The project contains the following files:

  - index.html: The main HTML file.

  - styles.css: Contains the CSS for styling the app.

  - script.js: The JavaScript file that handles API calls and DOM manipulation.

  - images/: A folder containing weather icons and other assets.


===========================================================================================================================================================================================

Usage

Open the application in your browser.

Enter a city name in the search box.

Click the search button to fetch the weather information.

View the weather details, including temperature, humidity, wind speed, and an appropriate weather icon.
