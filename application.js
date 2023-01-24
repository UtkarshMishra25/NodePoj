const express = require('express');
const fs = require('fs');
const path = require('path');
const { name } = require('pug/lib');
const app = express();
const port = 80;

// Express Specific Stuffs
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())
 
//PUG Specific Stuff
app.set('view engine', 'pug') // set the template engine as pug
app.set('views', path.join(__dirname, 'views'))  // set a view directory

// Endpoints
app.get('/', (req, res) => {
    const con = 'This is the best content so far'
    const params = { 'title': 'pubG is the best game', 'content': con }
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    let gender = req.body.gender
    let address = req.body.address
    let more = req.body.more
    let outputTowrite = `the name of the client is ${name}, ${age}, years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputTowrite)
    const params = { 'message': 'Your form has been submitted successfully' }
    res.status(200).render('index.pug', params);
});

// start the server
app.listen(port, () => {    
    console.log(`The application starts successfully on port ${port}`);
});
