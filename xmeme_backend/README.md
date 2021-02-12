# XMeme Backend



This is the backend for xmeme app made in nodejs using express.js framework



## Installation

If you want to do the installation, follow these steps:

Clone the repo using ssh:

```bash
git clone git@gitlab.crio.do:COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/neelparihar599-me_buildout_xmeme.git
```

Go into the backend folder using:
```bash
cd xmeme_backend
```

Install the dependencies:

using NPM

```bash
npm install
```

OR

using Yarn

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```


## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```


Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=8081
SWAGGER_PORT=8080

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/xmeme
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

## Error Handling

