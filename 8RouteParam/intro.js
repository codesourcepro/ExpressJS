/*

Route Parameter
=> Route parameters are named URL segments that are used to capture the values specified at their postion in the URL.
=> The captured values are popular in the re.params object, with the name of the route parameter specified in the path as their respective keys.
=> The name of route parameters must be made up of "word characters" ([A-Z, a-z, 0-9]).
Example:
    /student/:id                        // www.example.com/student/12
    /proudct/:category/:id              // www.example.com/proudct/mobile/23
    /product/order/:year/and/:month     // www.example.com/order/2022/and/oct
    /bus/:from-:to                      // www.example.com/bus/kohalpur-kathmandu
    /location/:state.:city              // www.example.com/location/lumbini.kohalpur
        -- req.params = {"state":"lumbini", "city":"kohalpur"}

    
Examples:

Route Parameter with RegX
=> To have more control over the exact string that can be matched by a route parameter, 
    you can append a regular expression in parenthesis(()).
    Examples:
        /student/:id([0-9]{2})                  www.example.com/student12
        /product/order/:year/and/:month([a-z])  www.example.com/order/2022/and/nov


    Tool to test: http://forbeslindeasy.github.io/express-route-tester/

Param method
app.param() - The app.param() function is used to add the callback triggers to route parameters.
    It is commonly used for the existance of the data requested related to  the route parameter.

=> All param callbacks will be called before any handler of any route in which the param occurs,
    and they will each be called only once in a request-response cycle, even if the parameter is matched in multiple routes.
Syntax:
    app.param(name, callback)
    app.param([name1, name2,....], callback)
        - If name is array, the callback trigger is registered for each parameter declared in it,
            in the order in which they are declared.



Query String
    /product            // www.example.com/product?category=mobile
    req.query = {"category": "mobile"}

    /product           // www.example.com/product?category=mobile&id=13
    req.query = {"category": "mobile", "id":12}


*/
