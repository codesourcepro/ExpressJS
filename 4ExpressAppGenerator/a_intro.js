/*

Express Application Generator
=> Use the application generator tool, express-generator, to quick create an application skeleton.
    Syntax:
        npx express-generator --view=ejs myapp
            or
        npm install -g express-generator
        and 
        express--view=ejs myapp

        npm install

        set DEBUG=myapp:*& npm start


    
Folder Structure:
    myapp - Application / Project Folder
    bin - The bin folder contains the executable file that starts your app. It starts the server (on port 3000, if no alternative is supplied) and sets up some basic error handling.
    public - Everything in this folder is accessible to people connecting to application. We can put JS, CSS, images and other assets.
    routes - We can put all our files. The generator creates two files, index.js and users.js.
    views - The views folder is where we have files used by your templating engine.
    app.js File - This file creates an express application object (named app, by convention), sets up the application with various settings and middleware, and then exports the app from the module.
    


*/