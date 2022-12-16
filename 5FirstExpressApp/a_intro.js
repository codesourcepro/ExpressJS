/*

First Express JS Application

express() - The epxress() function is a top level function exported by the express module.
const app = express() - The app returned by express() is in fact a JavaScript Function, designed to be passed to Node's HTTP servers as a callback to handle requests.
                      - This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does note inherit from these.
app.listen() - It binds and listens for connections on the specified host and port. If port is ommited or is 0, the OS will assign an arbitary unused port, which is useful for case like automated tasks.
                



*/