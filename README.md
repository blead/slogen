# SloGen: Slogan Generator
It generates slogans.

## Installation

Required: [Git](http://git-scm.com), [Node.js](http://nodejs.org)

1. Clone the repository

    ```shell
    git clone https://github.com/blead/slogen.git
    ```

2. Navigate to the project directory

    ```shell
    cd slogen
    ```

3. Install dependencies

    ```shell
    npm install
    ```

## Usage

- Starting a development server

    ```shell
    npm start
    ```

  The default port is `8080`. To use a specific port e.g. `8000`:

    ```shell
    npm start -- --port 8000
    ```

- Building for production
    ```shell
    npm run build
    ```
  The resulting files can be located inside `dist` directory.
