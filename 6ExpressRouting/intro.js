/*
Routing
=> Routing refers to determining how an application responds to a client request to a particular enpoint, which is a URI(or path) and a specific HTTP request method(GET, POST, and so on).
=> Each route can have one or more callback functions, which are executed when the route is matched.
Syntax:
    app.method(path, callback)
    or 
    app.method(path, [callback, callback2, ....])
    or
    app.method(path, [callback, callback2, ....], callback)

        - app is instance of express.
        - method is an HTTP request method, in lowercase.
        - path is a path on the server.
        - callback is the function executed when the route is matched.
EXAMPLES:
    Syntax: app.method(path, callback)

    const app = express()
    app.get('/', function(req, res){
        res.send("Hello World")
    })

HTTP request Method
--> GET => Retrieve Data
--> POST => Create/Insert Data
--> PUT => Completely Update Data
--> PATCH => Partially Update Data
--> DELETE => Delete Data
--> ALL => Any HTTP Request Method

    -app.all(path, [callback1, callback2,...], callback) => This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.
                                                         => This method is useful for mapping "global" logic for specific path prefixes or arbitary matches.
                                                         
                                            example:
                                            app.all('student/all', (req, res, next)=>{
                                                console.log('Accessing the secret setion...')
                                                next()  // pass control to the next callback
                                            })
                                            app.all('*', requireAuthentication, LoadUser)
                                            app.all('/api/*',requireAuthentication)

PATH
=> Route paths can be strings, string patterns, or regular expressions. Query strings are not part of the route path.
=> The Characters ?, +, * and () are subsets of their regular expression counterparts.
=> The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
=> If you need to use the doller character ($) in a path string, enclose it escaped within ([ and ]).
Example:
    www.codesourcepro.com/data/$book
    app.get("/data/([\$])book", callback)

CALLBACK
=> Route Callbacks can be in the form of a function, an array of functions, or combinations of both.
=> You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoked next('route) to bypass the remaining route callbacks.
Example:
    app.get('cbexample1,(req, res)=>{
        res.send('One Callback Example')
    })
    -More than one Callback Fucntions:-
    app.get('cbexample2',(req, res, next)=>{
        console.log("First Callback")
        next()
    },(req, res)=>{
        console.log("Second Callback")
        res.send('Morethan one Callback Example')
    })
    - An array of Callback function
    const cb1 = (req, res, next)=>{
        console.log('First Callback')
        next()
    }
    const cb2 = (req, res, next)=>{
        console.log('Second Callback')
        next()
    }
    const cb3 = (req, res, next)=>{
        res.send('An array of Callback')
    }

    app.get('/cbexample3',[cb1, cb2, cb3])

    - Combination of independent functions and Array of Functions
    

*/