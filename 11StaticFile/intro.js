/*
Static Files in ExpressJS
=> CSS files, Javascript Files, images files, video files etc are considered as static files in Express JS.
=> To serve static files such as images, CSS files, and JavaScript files, use the epxress.static built-in middleware function in Express.
    Syntax:
        epxress.static(root, [options])
    eg:
        app.use(express.static('public'))  =>   becomes in url: http://localhost:3000/css/style.css

OR using PREFIX virtual PATH:
=> To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static fucntion, specify a mount path for the static directory, as shown below:
    app.use('/static',express.static('public)) => becomes in Url: http://localhost:3000/static/css/style.css

=> The path that you provide to the express.static function is relative to the directory from where you lunch your node process. If you run the express app from another directory, its safer to use the absolute path of the directory that you want to serve:
    app.use('/static', express.static(join(process.cwd(), 'public')))

Eg:-
    const options = {
        dotfiles: 'ignore',
        etag: false,
        extensions: ['htm', 'html'],
        index: false,
        maxAge: '1d',
        redirect: false,
        setHeaders: function(res, path, stat){
            res.set('x-timestamp', Date.now())
        }
    }
    app.use(express.static('public',options))

*/