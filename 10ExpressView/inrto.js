/*
Express View
=> Views contains the HTML served by your application and separate your application logic from your presentation logic. Views are stored in the views directory.
Creating View
1. create a folder views
    -> index.html

Example:
    app.get('/',(req, res) =>{
        res.sendFile(join(process.cwd(), 'views', 'index.html'))
    })

Some Important Points:
    process.cwd() - process is node's global boject, and .cwd() returns where node is running.
    app.sendFile() - This is used to transfers the file at the given path. Sets the content Type response HTTP header field based on the filename's extension. Unless the root option is set in the options object, path must be an absolute path to the file.
    



*/