/*
Template Engine
=> A template engine enables to use static template files in your application.
=> At runtime, the template engine replaces variables in a template file with actual values and transformation the template into an HTML file sent to the client.
=> This approach makes it easier to design an HTML page.
    - EJS
    - Pug
    - Mustache
    - Nunjunks
    - Dust
    - Link Other: https://expressjs.com/en/resources/template-engine.html
Setup for Template Engine
1. Install Template Engine
    --> npm install ejs
2. In app.js: Setup the Directory where template files are located.
    app.set('views', '/views') -  In case of other folder rather than views
3. Setup the Template Engine to use
    app.set('view engine', 'ejs')


Some methods
render()
    - res.render() - It renders a view and sends the rendered HTML string to the client.
        Syntax: res.render(view[,locals][,callback])
            - view: The view argument is a string that is the file path of the view file to render. eg: index.ejs
                    : This can be absoulte path, or a path relative to the views setting.
                    : If the path does not contain a file extension, then the view engine setting determines the file extension.
            - locals: It's an object whose properties define local varialbes for the view.
            - callbacks: It's a function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.
            Example:
                Syntax: res.render(view[,locals][,callback])
                Eg: 
                    - Send the rendered view to the client
                        res.render('index')
                    - Pass a local varialbe to the view
                        res.render('index',{name:'Promod'})
                    - The rendered HTML string has to be sent explicitly.
                        res.render('index',function(err,html){
                            res.sent(html)
                        })


*/