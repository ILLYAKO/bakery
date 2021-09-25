https://bakeryserver.herokuapp.com/
https://illyako.github.io/bakery/#/bakery/

// server
index.js
app.js
.env

//
cd server
npm init

 npm install express dotenv cors cookie-parser bcrypt jsonwebtoken uuid
 npm install react-bootstrap@next bootstrap@5.1.0
 npm install sequelize mysql2 //tedious
 npm install nodemailer
 npm install express-validator
 npm install --save-dev nodemon
 npm install cloudinary
// package.json 
"script":{
        "start": "node index.js",
    "dev": "nodemon index.js",
}


// client 
 npx create-react-app client
// install bootstrap in client folder
 npm install bootstrap
 npm install @popperjs/core --save

// add in index.css 
html,
body,
#root,
.App {
  height: 100vh;
}

//
npm install react-router-dom

// created test

//
npm i axios

npm i mobx // ?????

images from https://unsplash.com/photos/dCKQMAzy8II

npm i multer
// npm i multer@2.0.0-rc.1  ???

// src={require("../../../../assets/images/" + img).default.toString()}


// PayPal
https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/
https://youtu.be/AtZGoueL4Vs

// add in public/index.html
  <script src="https://www.paypal.com/sdk/js?client-id=AYJvkDsO065ZyGmqftbpfClFKpFoxDXMSpTN90ETMjvL9Uss5dpgeL62m28skQNXJY2Fe-BRjkweX9BF&currency=CAD"></script>


DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=admin
DB_NAME=bakery_db


In the Heroku dashboard:
Step 1. - Connect github repository to Heroku
Inside the Deploy tab, scroll to Deployment method and connect your Github account. find the repo and hit connect. heroku should be authorized as an Oauth app in your github now.

If you cannot find the repo: Either your github has not authorized Heroku or you did not create this repo and need to make sure you have admin access to it. If this is not possible, invite an admin of the repo to your heroku app by going to Access tab in Heroku Dashboard and adding the admin as a collaborator. The admin then logs into heroku and completes Step 1 here. Afterwards you can finish the following steps.

Step 2. - Set Heroku Config Var PROJECT_PATH to your server folder
Inside the Settings tab, set a config var to tell Heroku the path to find the server code you want deployed.

Example: lets say your repo name is MyRepo and it has 2 sub-folders. back-end contains a Node.js server and front-end contains a React app. Your github directory looks like this:

MyRepo/front-end/package.json
MyRepo/back-end/package.json

Then you should set your config var to PROJECT_PATH in the left box and back-end in the right box.

Step 3. - Set a Heroku Buildpack that will deploy the PROJECT_PATH folder
Again inside the Settings tab, you need to add a Buildpack that will tell heroku to look for your folder instead of deploying the repo root. There should already be 1 buildpack there to tell heroku what type of server it is (javascript/node.js, python/django, etc...).

Enter this url to add buildpack https://github.com/timanovsky/subdir-heroku-buildpack.git and make sure this is at the top of the buildpack chain (drag the lines on the left to make it above any other buildpacks you have added.

Step 4. - Enable auto deploy
Inside the Deploy tab, scroll to Automatic Deploys and click the black button to enable automatic deploys

Auto Deploy complete! Now check the build logs and make sure you don't have any errors
/////////////////////////////////////////////////////

Allow third-side app use Gmail account
See nodemailer's official guide to connecting Gmail:
https://community.nodemailer.com/using-gmail/
It works for me after doing this:
Enable less secure apps - https://www.google.com/settings/security/lesssecureapps
Disable Captcha temporarily so you can connect the new device/server - https://accounts.google.com/b/0/displayunlockcaptcha
Share


Allow cookies for all sites: res.cookie(  .... sameSite: "none", secure: true ...)

// Deploying a create-react-app with routing to GitHub pages
// Step 1. Add Routing to our application
cd client
npm install
// Step 2. Then import HashRouter, Route, and Link from react-router-dom into our application. It is important to note we are using HashRouter here as without it on browser refresh, we would get a 404 on our GitHub pages live URL.
// App.js
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
// Step 3. install GitHub Pages package as a dev-dependency in client
cd client
npm install gh-pages --save-dev
// Step 4. Add properties to package.json file.
//"http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository
"homepage": "http://illyako.github.io/bakery"
// Step 5. In the existing scripts property we to need to add predeploy and deploy.
"scripts": {
//....
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

// Step 6. Deploy it to GitHub Pages
cd client
npm run deploy

// Step 7. Optionally, commit your source code to the "master" branch and push your commit to GitHub. (1 minute)
git add .
git commit -m "Create a React app and publish it to GitHub Pages"
git push origin master