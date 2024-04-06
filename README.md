# WeatherHub

WeatherHub is a weather application built using React, Redux, and TypeScript, providing users with current weather information and five-day forecasts for their selected locations.

## Features

- **Current Weather Display**: View real-time weather data including temperature, weather condition, and location.
- **Five-Day Forecast**: Access a five-day forecast for the selected location.
- **Dark Mode Support**: Toggle between light and dark mode for better viewing experience.
- **Favorites Management**: Users can add and remove locations from their favorites list for quick access to weather information.
- **Geolocation Integration**: Users can manually request weather data for their current location by clicking on a button.
- **Dynamic Background**: Background of weather card changes based on the weather condition for improved visual representation.

## Technologies Used

- React: Frontend framework for building user interfaces.
- Redux Toolkit: State management library for managing application state.
- Axios: HTTP client for making API requests.
- Material-UI: React component library for UI design.
- localStorage: Browser storage for storing user preferences and favorites.
- AccuWeather API: Provides weather data used in the application.
- TypeScript: A statically typed superset of JavaScript for building scalable applications.

## Project Structure

The project is structured into several directories:

- **components**: Contains reusable UI components such as WeatherCard, FavoritesPage, and CustomAppBar.
- **redux**: Contains Redux slices managing different aspects of the application state.
- **utils/api**: Handles API calls to fetch weather data.
- **utils/helpers**: Provides helper functions for various tasks such as geolocation and date formatting.
- **styles**: Holds stylesheets for custom styling of components.
- **interfaces**: Defines TypeScript interfaces for data structures used throughout the application.
- **pages**: Contains main pages of the application such as WeatherPage and FavoritesPage.

## Setup Instructions

To run the WeatherHub application locally, follow these steps:

1. Clone the repository: `git clone [repository_url]`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

Ensure you have Node.js and npm installed on your system.

## Usage

- Upon opening the application, users are greeted with the current weather information for Tel Aviv, Israel.
- Users can search for locations using the search bar and add them to their favorites.
- Clicking on the "Favorites" tab displays a list of favorite locations along with their weather information.
- Toggle between light and dark mode using the switch provided in the navigation bar.
- To fetch weather data for the user's current location, users can click on the "Get Current Location" button to grant geolocation permission.

## Credits

WeatherHub was developed by Daniel Robin as part of Abra job application. Special thanks to AccuWeather for providing weather data.

## License

This project is licensed under the MIT License .
