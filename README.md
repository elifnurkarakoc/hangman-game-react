<p align="center">
    <h3 align="center">Hangman Game with ReactJS & Tailwind CSS</h3>
    <br />
        <p align="center">
        <a href="https://hangman-game-react-tailwindcss.netlify.app/">View Demo</a>
        • 
        <a href="https://my-json-server.typicode.com/elifnurkarakoc/hangman-game-react-json/users">Json-Server</a>
    </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

![Hangman Game Screen Shot](https://github.com/elifnurkarakoc/hangman-game-react/blob/main/hangman-game-ss/Hangman-Game-with-ReactAndTailwind%20CSS.gif)

- [x] Rules of Hangman game
- [x] CRUD operations with Json-server
- [x] User sign in form and sign up form with Formik (authentication data is kept in the browser's local storage.)
- [x] Protected route and authentication (Home, Profile, Score, Sign in , Sign up, Logout)
- [x] Theme switcher with Tailwind CSS

Deployed Json environment is not dynamic, changes are not persistent between calls.
For this reason, you may not see the current version of the project's scoreboard on netlify.

[You can access screenshots from the link](https://github.com/elifnurkarakoc/hangman-game-react/tree/main/hangman-game-ss)
### Built With

* [ReactJS](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/elifnurkarakoc/hangman-game-react.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file and write
   ```sh
   REACT_APP_BASE_ENDPOINT=http://localhost:3001
   ```
4. Run command
   ```sh
   json-server --watch ./data/data.json --port 3001
   ```
3. Run command in second terminal
   ```sh
   npm start
   ```
