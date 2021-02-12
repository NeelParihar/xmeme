# XMeme App

XMeme is a full stack application used for uploading and sharing memes with fellow xmemers, it provides various exciting features for memers to use.


## Following is the Technology Stack which is used to build this version of XMeme app

- Node.Js, Express.Js for backend, Details [here](./xmeme_backend/README.md)

- React.JS, Gatsby for frontend, Details [here](./xmeme_frontend/README.md)

- MongoDB as Database


## Application Architecture

<img height="450px" src="https://storage.googleapis.com/crio-content-container-assets/ME_ME_BUILDOUT_XMEME_MODULE_ME_BUILDOUT_XMEME_MODULE_BASIC_image_1.png" alt="project-arch">


## Installation

If you want to do the installation, follow these steps:

Clone the repo using ssh:

```bash
git clone git@gitlab.crio.do:COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/neelparihar599-me_buildout_xmeme.git
```



## Scripts

- **install.sh** (For installing all the required dependencies)

- **server_run.sh** (For starting the backend server to listen for incoming requests)

- **sleep.sh** (It is a utility script useful while installing and starting the server) 

- **test_server.sh** (Used to run all the scripts and test the features of the backend server)


## Project Structure

```
\
 |--xmeme_backend\         # Contains Backend project 
 |--xmeme_frontend\        # Contains Frontend project
 |--.gitignore\           
 |--Dockerfile\            # File to build Docker image
```
