const express = require('express')
const app = express();
const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
    res.send('Code Source Pro');
})

app.listen(port, () => {
    console.log(`Server Lisenting at http://localhost:${port}`)
})

/*
If you are using New method or ES6 Syntax then:
First in package.json file add "type": "module" 
Code:
    import express from 'express'
    const app = express();
    const port = process.env.PORT || '3000'

    app.get('/', (req, res) => {
        res.send('Code Source Pro');
    })

    app.listen(port, () => {
        console.log(`Server Lisenting at http://localhost:${port}`)
    })

*/