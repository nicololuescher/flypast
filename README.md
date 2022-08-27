<p align="center">
    <a href="https://github.com/nicololuescher/flypast">
        <img height="120px" src="assets/flypast.svg" />
    </a>
    <h1 align="center">
        FlyPast
    </h1>
</p>

<p align="center">
  <strong>
    A <br />
    <a href="https://github.com/nicololuescher/flypast">Web Application</a>
    <br />
    where the Jungfraubahnen are managing their adventure queueing.
  </strong>
</p>

<p align="center">
  <a href="https://github.com/nicololuescher/flypast/issues"><img
    src="https://img.shields.io/github/issues/nicololuescher/flypast"
    alt="Build"
  /></a>
  <a href="https://github.com/nicololuescher/flypast"><img 
    src="https://img.shields.io/github/license/nicololuescher/flypast" 
    alt="License"
  /></a>
  <img alt="GitHub go.mod Go version (subdirectory of monorepo)" src="https://img.shields.io/github/go-mod/go-version/nicololuescher/flypast?filename=src%2Fbackend%2Fgo.mod&label=Go">
</p>

<h4 align="center">Github Workflows</h4>
<p align="center">
  <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/nicololuescher/flypast/CI%20Backend/main?label=ci%20backend">
  <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/nicololuescher/flypast/CI%20Frontend/main?label=ci%20frontend">
  <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/nicololuescher/flypast/Docker%20Image%20Build%20&%20Push/main?label=docker%20image%20build%20%26%20push">
  <img alt="GitHub Workflow Status (branch)" src="https://img.shields.io/github/workflow/status/nicololuescher/flypast/CodeQL/main?label=CodeQL">
</p>

<p align="center">
  This project was created at the <a href="https://bernhackt/">BernHackt</a> Hackathon in 2022.
</p>

<p align="center">
  <em>
    Check out the project team university behind FlyPast – 
    <a href="https://bfh.ch">BFH</a>
  </em>
</p>

<h2></h2>
<p>&nbsp;</p>

## Everything you would expect

### It's a simple web app

*tbd.*

### It's free

Everything is free to use and distribute.

### Open Source

Trust me, I'm open source.  
You can find the source code on [Github](https://github.com/nicololuescher/flypast).  
The frontend is written in Next.js and the backend in GoLang.  
License: MIT

<h2></h2>
<p>&nbsp;</p>

## Setup

You can deploy FlyPast with Docker-Compose.

```bash
docker-compose up --build
```

*Seed Data*

```bash
seed/seed.sh # execute seed data on backend api
```

Visit [http://localhost:8080](http://localhost:8080)


### Environment Variables

#### Frontend

*none*

#### Backend

- `CORS` (optional): Set CORS headers for the API.  
  Default: `*`
- `JWT_SECRET_KEY` (optional): Set the JWT secret key.
- `ADMIN_PASSWORD` (optional): Set the admin password.  
  Default: `admin`
- `DB_USERNAME` (optional): Set the database username.  
  Default: `postgres`
- `DB_PASSWORD` (optional): Set the database password.  
  Default: `postgres`
- `DB_HOST` (optional): Set the database host.  
  Default: `localhost`
- `DB_PORT` (optional): Set the database port.  
  Default: `5432`
- `DB_NAME` (optional): Set the database name.  
  Default: `postgres`
