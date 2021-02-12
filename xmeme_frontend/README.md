# XMeme frontend

This is a frontend for xmeme app. Build using reactjs and gatsby utilizing serverside rendering 


## Installation

If you want to do the installation, follow these steps:

Clone the repo using ssh:

```bash
git clone git@gitlab.crio.do:COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/neelparihar599-me_buildout_xmeme.git
```

Go into the frontend folder using:
```bash
cd xmeme_frontend
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
cp .env.template .env.development

# open .env and modify the environment variables (if needed)
```
Similar to `.env.development`, create a `.env.production` file with necessary variables, for production deployment

## Commands

Running locally:

```bash
npm start
```

Build command:

```bash
npm build
```

## Environment Variables

The environment variables can be found and modified in the `.env.production` or `.env.development` file. They come with these default values:

```bash
# Url of backend by default will point to local server 
BACKEND_URL= http://localhost:8081/
```



## Project Structure

```
src\
 |--assets\         # Assets such as icons, illustrations
 |--components\     # React componenets for UI
 |--data\           # Javascript object for config data
 |--hooks\          # React Hooks for global state management (Dark Mode,Media Query)
 |--pages\          # Pages 
 |--providers\      # Providers
```

