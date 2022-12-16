/*
Router
- Router class is used to create modular, mountable route handlers.
- A Router instance is complete middleware and routing system.
- Every Express application has built-in app router.
Steps:
1. Create Router Module - routes/student.js
2. Create Router Instance
    const router = express.Router()
3. Define Routes using router object
    router.get('/', fuction(req,res){
        res.send('Hello World')
    })
4. Export router
    module.exports = router or export default router

5. Create app.js or index.js
6. Import Router Module
    const stu = require('./student.js')
7. Load Router Module
    app.use('/bidrathi')


app.use([path], [callback1, callback2,...]) ==> It mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
                - A router is valid middleware.
                - An express app is valid middleware.
                


*/