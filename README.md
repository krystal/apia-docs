# View the site

👉 See the live documentation site at https://apia.k.io

# Docs

## The purpose of this repository

This repository hosts the documentation for Apia only. If you are looking for the Github repo for the library source code, [go to the open source repository for Apia →](https://github.com/apiaframework/apia)

## Contribution Instructions

Contributions are welcome! Please open up a pull request that clearly describes your intentions.

This site runs on [Nuxt Content](https://content.nuxtjs.org/). Please review their docs for how this framework works.

### Installing on your local machine

If you'd like to run this site locally on your machine, follow these steps:

#### Docker usage

In an effort to keep our Node versions the same, we have a `docker-compose.yml` file that will prepare your development environment for you. We encourage you to use this even if you have NPM installed on your machine. This will guarantee we have the same version across everyone's computer.

#### Setup

Install dependencies:

```bash
docker-compose run node yarn install
```

#### Running the docs site in development

```bash
docker-compose pull && docker-compose up
```

Wait for your machine to complete the build, then your development copy will be available at http://localhost:3000

### Managing content

#### Content Location

All content is located under the `/content` folder, followed by the language. You will find the markdown files in there.
