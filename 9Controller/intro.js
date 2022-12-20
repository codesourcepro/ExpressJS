/*
Controller in ExpressJS
=> Controller can group related request handling logic separately. Instead of defining all of your request handling logic as callback in route or route files, you may wish to organize this behaviour using Controller modules.
    app.js
        app.get('/student/all', (req, res) =>{
            res.send('All Student')

        })
    or
    routes/student.js
        router.get('/all', (req, res) =>{
            res.send('All Student')

        })

folder = controller/studentController.js
        const allStudent = (req, res) =>{
            res.send('All Student')

        }
        module.export = {allStudent}
In app.js
        app.get('/student/all', allStudent)
or In route folder
        router.get('/all', allStudent)


Fixing Error res.send
Use return or use if else concept
*/