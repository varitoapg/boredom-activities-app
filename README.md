# Boredom Activities App

## English

<details>
  <summary>Click to expand!</summary>
  
## Table of Contents

- [Disclaimer](#disclaimer)
- [Description](#description)
- [Cloning the Repository and Running the Project](#cloning-the-repository-and-running-the-project)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)
- [Additional Information](#additional-information)

## Disclaimer

Due to issues with the original API, which has CORS restrictions that prevent proper communication from the frontend, and an error indicating exceeded call limits even without making any API calls, I have implemented a fake API for this project.

The fake API replicates the same endpoint structure as the original, ensuring the project works as intended for demonstration and development purposes. Keep in mind that the data provided by this fake API is static and may not reflect live information from the original source.

This approach was chosen to provide a seamless experience without API call limitations or CORS errors affecting the functionality of the project. However, since the API is deployed on Onrender using its free service, the first time you enter the website, it may be a bit slow.

## Description

This web application displays activities to perform when feeling bored, using the [Fake Bored API](https://bored-api-fake.onrender.com/), you can see its repository [here](https://github.com/varitoapg/bored-api-fake). The main focus of the project is on creating an attractive, responsive design and ensuring a proper connection to the API. The application has the following main features:

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

After you install the dependencies you need to create a .env file in the root of the project. You need to add this variable:

```
VITE_API_URL="https://bored-api-fake.onrender.com/"
```

Once you've followed these steps, the app will be available at http://localhost:5173/ by default.

## Technologies Used

This project was built using the following technologies and libraries:

### Technologies and Libraries Used

This project was built using the following technologies and libraries:

- **React**: ^18.3.1 – A JavaScript library for building user interfaces.
- **React DOM**: ^18.3.1 – Used for rendering React components to the DOM.
- **React Router DOM**: ^6.26.2 – For managing navigation and routing in the app.
- **Vite**: ^5.4.1 – A fast build tool for modern web projects.
- **TypeScript**: ^5.5.3 – Adds static typing to JavaScript for better tooling and maintainability.
- **ESLint**: ^9.9.0 – A tool for identifying and fixing problems in your TypeScript/JavaScript code.
- **Prettier**: ^3.3.2 – A code formatter for maintaining consistent style across the project.
- **Husky**: ^9.1.6 – Git hooks management to automate linting and other checks before committing.
- **Lint-Staged**: ^15.2.10 – Runs linting and formatting tasks on staged files before committing.

### Testing Libraries

- **Vitest**: ^2.1.1 – A blazing fast unit test framework (similar to Jest), used for testing.
- **@Testing-Library (Jest DOM, React, User Event)**:
  - **@Testing-Library/jest-dom**: ^6.5.0
  - **@Testing-Library/react**: ^16.0.1
  - **@Testing-Library/user-event**: ^14.5.2
  - Provides utilities for writing and running unit and integration tests.
- **@vitest/coverage-istanbul**: ^2.1.1 – Generates coverage reports for Vitest.
- **JS DOM**: ^25.0.1 – A JavaScript implementation of the DOM for Node.js to simulate a browser-like environment during tests.

### i18n (Internationalization)

- **i18next**: ^23.10.0 – A powerful internationalization framework for managing translations.
- **i18next-browser-languagedetector**: ^7.2.0 – Automatically detects user language in the browser.
- **i18next-resources-to-backend**: ^1.2.0 – Allows dynamic loading of translation resources.
- **react-i18next**: ^14.0.5 – React bindings for i18next, enabling seamless translation management in your React app.

### Utilities

- **Accept-Language**: ^3.0.18 – A utility to parse `Accept-Language` headers.
- **JS Cookie**: ^3.0.5 – A simple, lightweight library for handling cookies in the browser.

### SWC (Speedy Web Compiler)

- **@vitejs/plugin-react-swc**: ^3.7.1 – A Vite plugin that enables faster compilation for React using the SWC compiler.

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Compiles the project for production using Vite.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run preview`**: Previews the production build locally.
- **`npm run test`**: Runs the test suite using Vitest.
- **`npm run test:watch`**: Runs tests in watch mode (ideal for development).
- **`npm run test:ui`**: Opens the Vitest UI to interactively view test results.
- **`npm run test:coverage`**: Generates test coverage reports using Vitest.

## Additional Information

The app is designed to follow good practices for readability and maintainability, including:

- Clean code with organized and reusable components.
- Proper separation of concerns between the UI and business logic.
- Responsiveness to ensure compatibility with various screen sizes.

Feel free to contribute or report issues to enhance the functionality and user experience!

The website is deployed using Netlify at this URL: [https://my-bored-activities.netlify.app/](https://my-bored-activities.netlify.app/)

</details>

## Spanish

<details>
  <summary>¡Haz clic para expandir!</summary>
  
## Tabla de Contenidos

- [Descargo de Responsabilidad](#descargo-de-responsabilidad)
- [Descripción](#descripción)
- [Clonar el Repositorio y Ejecutar el Proyecto](#clonar-el-repositorio-y-ejecutar-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Scripts Disponibles](#scripts-disponibles)
- [Información adicional](#información-adicional)

## Descargo de Responsabilidad

Debido a problemas con la API original, que tiene restricciones de CORS que impiden una comunicación adecuada desde el frontend, y un error que indica que se han excedido los límites de llamadas incluso sin haber realizado ninguna llamada, he implementado una API falsa para este proyecto.

La API falsa replica la misma estructura de endpoints que la original, asegurando que el proyecto funcione como está previsto para fines de demostración y desarrollo. Ten en cuenta que los datos proporcionados por esta API falsa son estáticos y pueden no reflejar información en tiempo real de la fuente original.

Esta solución fue elegida para proporcionar una experiencia fluida sin las limitaciones de llamadas a la API ni los errores de CORS que afectarían la funcionalidad del proyecto. Sin embargo, dado que la API está desplegada en Onrender en su servicio gratuito, la primera vez que ingreses a la web, puede que sea un poco lenta.

## Descripción

Esta aplicación web muestra actividades para realizar cuando te sientes aburrido, utilizando la [Fake Bored API](https://bored-api-fake.onrender.com/), puedes ver su repositorio [aquí](https://github.com/varitoapg/bored-api-fake). El enfoque principal del proyecto es crear un diseño atractivo, receptivo y garantizar una conexión adecuada con la API. La aplicación tiene las siguientes características principales:

1. **Obtener y mostrar actividades**: La aplicación llama a la Bored API y muestra actividades que los usuarios pueden hacer cuando están aburridos.
2. **Diseño Responsivo**: La interfaz de usuario está diseñada para ser receptiva, asegurando una experiencia fluida tanto en dispositivos de escritorio como móviles.
3. **Filtrado Opcional**: La aplicación incluye opcionalmente una funcionalidad de filtro, que permite a los usuarios filtrar actividades según diferentes criterios (por ejemplo, tipo de actividad, número de participantes).

## Clonar el Repositorio y Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/varitoapg/boredom-activities-app.git

# Navegar al directorio del proyecto
cd boredom-activities-app

# Instalar las dependencias requeridas
npm install

# Ejecutar el proyecto en modo de desarrollo
npm run dev


```

Después de instalar las dependencias, necesitas crear un archivo `.env` en la base del proyecto. Debes agregar esta variable:

```
VITE_API_URL="https://bored-api-fake.onrender.com/"
```

Una vez que hayas seguido estos pasos, la aplicación estará disponible en http://localhost:5173/ por defecto.

## Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías y bibliotecas:

### Tecnologías y Bibliotecas Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías y bibliotecas:

- **React**: ^18.3.1 – Una biblioteca de JavaScript para construir interfaces de usuario.
- **React DOM**: ^18.3.1 – Utilizada para renderizar componentes de React en el DOM.
- **React Router DOM**: ^6.26.2 – Para gestionar la navegación y el enrutamiento en la aplicación.
- **Vite**: ^5.4.1 – Una herramienta de construcción rápida para proyectos web modernos.
- **TypeScript**: ^5.5.3 – Añade tipado estático a JavaScript para una mejor herramienta y mantenibilidad.
- **ESLint**: ^9.9.0 – Una herramienta para identificar y solucionar problemas en tu código TypeScript/JavaScript.
- **Prettier**: ^3.3.2 – Un formateador de código para mantener un estilo consistente en todo el proyecto.
- **Husky**: ^9.1.6 – Gestión de hooks de Git para automatizar el linting y otras verificaciones antes de confirmar cambios.
- **Lint-Staged**: ^15.2.10 – Ejecuta tareas de linting y formateo en archivos preparados antes de confirmar cambios.

### Bibliotecas de Pruebas

- **Vitest**: ^2.1.1 – Un marco de pruebas unitarias muy rápido (similar a Jest), utilizado para realizar pruebas.
- **@Testing-Library (Jest DOM, React, User Event)**:
  - **@Testing-Library/jest-dom**: ^6.5.0
  - **@Testing-Library/react**: ^16.0.1
  - **@Testing-Library/user-event**: ^14.5.2
  - Proporciona utilidades para escribir y ejecutar pruebas unitarias e integradas.
- **@vitest/coverage-istanbul**: ^2.1.1 – Genera informes de cobertura para Vitest.
- **JS DOM**: ^25.0.1 – Una implementación de JavaScript del DOM para Node.js que simula un entorno similar a un navegador durante las pruebas.

### i18n (Internacionalización)

- **i18next**: ^23.10.0 – Un potente marco de internacionalización para gestionar traducciones.
- **i18next-browser-languagedetector**: ^7.2.0 – Detecta automáticamente el idioma del usuario en el navegador.
- **i18next-resources-to-backend**: ^1.2.0 – Permite la carga dinámica de recursos de traducción.
- **react-i18next**: ^14.0.5 – Enlaces de React para i18next, permitiendo una gestión fluida de traducciones en tu aplicación React.

### Utilidades

- **Accept-Language**: ^3.0.18 – Una utilidad para analizar encabezados `Accept-Language`.
- **JS Cookie**: ^3.0.5 – Una biblioteca simple y ligera para manejar cookies en el navegador.

### SWC (Compilador Web Rápido)

- **@vitejs/plugin-react-swc**: ^3.7.1 – Un plugin de Vite que permite una compilación más rápida para React utilizando el compilador SWC.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts:

- **`npm run dev`**: Inicia el servidor de desarrollo utilizando Vite.
- **`npm run build`**: Compila el proyecto para producción utilizando Vite.
- **`npm run lint`**: Ejecuta ESLint para verificar problemas de calidad en el código.
- **`npm run preview`**: Previsualiza la compilación de producción localmente.
- **`npm run test`**: Ejecuta el conjunto de pruebas usando Vitest.
- **`npm run test:watch`**: Ejecuta las pruebas en modo de observación (ideal para desarrollo).
- **`npm run test:ui`**: Abre la interfaz de usuario de Vitest para ver los resultados de las pruebas de forma interactiva.
- **`npm run test:coverage`**: Genera informes de cobertura de pruebas usando Vitest.

## Información Adicional

La aplicación está diseñada para seguir buenas prácticas de legibilidad y mantenibilidad, incluyendo:

- Código limpio con componentes organizados y reutilizables.
- Una correcta separación de responsabilidades entre la interfaz de usuario y la lógica de negocio.
- Responsividad para garantizar la compatibilidad con varios tamaños de pantalla.

¡Siéntete libre de contribuir o reportar problemas para mejorar la funcionalidad y la experiencia del usuario!

La web está desplegada utilizando Netlify en esta URL: [https://my-bored-activities.netlify.app/](https://my-bored-activities.netlify.app/)

</details>
