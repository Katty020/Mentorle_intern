
## Getting Started
Created By Aryan Katiyar (Intern At Mentorle.in)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer or use [Docker](https://www.docker.com/products/docker-desktop).

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```
### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```


## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/mentorle.git

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Linking Portfolio to GitHub

Generate a classic GitHub personal access token following these [instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic) (make sure you don't select any scope just generate a simple token). If you are using [GitHub Actions](#configuring-github-actions-recommended) to deploy your you can skip this section.

1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

Note: Configuring environment variables before deploying your portfolio is highly recommended as some components depend on API data. 

2. Inside the .env file, add key `REACT_APP_GITHUB_TOKEN` and assign your GitHub token like this, also add your username as `GITHUB_USERNAME`

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"
```

Set `showGithubProfile` to true or false to show Contact Profile using GitHub, defaults to false.

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

Note: Open Source Projects section only show pinned items of your GitHub.
If you are seeing something as shown below, follow these [instructions](https://docs.github.com/en/enterprise/2.13/user/articles/pinning-items-to-your-profile).

![ERROR](https://i.imgur.com/Hj6mu1K.png)

If the above solution still doesn't work, visit the [wiki page](https://github.com/mentorle/wiki/Github-Setup-For-Open-Source-Projects).

## Linking blogs section to Medium

Optionally, you can link the blogs section to your medium user account:

* Inside the .env file, add key `MEDIUM_USERNAME` and assign your Medium username

```env
// .env
MEDIUM_USERNAME = "YOUR MEDIUM USERNAME"
```

* For Github Action, change the environment variable `MEDIUM_USERNAME` in `.github/workflows/deploy.yml`

Set `displayMediumBlogs` to true or false in portofolio.js to display fetched Medium blogs, defaults to true.

## Change and customize every section according to your need.

#### Personalize page content in `/src/mentorle.js` & modify it as per your need. You will also need to modify `index.html` to change the title and metadata to provide accurate SEO for your personal portfolio.
