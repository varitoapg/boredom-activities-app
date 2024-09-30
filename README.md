# Boredom Activities App

## Table of Contents

- [Description](#description)
- [Cloning the Repository and Running the Project](#cloning-the-repository-and-running-the-project)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)

## Description

This web application displays activities to perform when feeling bored, using the [Bored API](https://boredapi.appbrewery.com/). The main focus of the project is on creating an attractive, responsive design and ensuring a proper connection to the API. The application has the following main features:

1. **Fetch and display activities**: The application calls the Bored API and displays activities that users can do when they're bored.
2. **Responsive Design**: The user interface is designed to be responsive, ensuring a smooth experience on both desktop and mobile devices.
3. **Optional Filtering**: The app optionally includes a filter functionality, allowing users to filter activities by different criteria (e.g., activity type, number of participants).

## Cloning the Repository and Running the Project

To run this project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/varitoapg/boredom-activities-app.git

# Navigate into the project directory
cd boredom-activities-app

# Install the required dependencies
npm install

# Run the project in development mode
npm run dev

```

Once you've followed these steps, the app will be available at http://localhost:5173/ by default.

## Technologies Used

This project was built using the following technologies and libraries:

- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **Vite**: ^5.4.1
- **TypeScript**: ^5.5.3
- **ESLint**: ^9.9.0
- **Testing Library (Jest DOM, React, User Event)**: for unit and integration testing.
- **Vitest**: ^2.1.1 (for testing)
- **JS DOM**: ^25.0.1 (for testing)
- **SWC (Vite plugin)**: ^3.7.1 (for faster compilation)

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Compiles the project for production using Vite.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.
- `npm run test`: Runs the test suite using Vitest.
- `npm run test:watch`: Runs tests in watch mode (ideal for development).
- `npm run test:ui`: Opens the Vitest UI to interactively view test results.

## Additional Information

The app is designed to follow good practices for readability and maintainability, including:

- Clean code with organized and reusable components.
- Proper separation of concerns between the UI and business logic.
- Responsiveness to ensure compatibility with various screen sizes.

Feel free to contribute or report issues to enhance the functionality and user experience!
