const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// For serving ststic files
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug')

// set a view directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
app.get('/demo', (req, res)=>{
    res.status(200).render('demo', { title: 'Hey mouli', message: 'Hello there! and thanks for telling me how to use pug' })
});

app.get('/', (req, res)=>{
    res.status(200).send('This is Home page of my first express app with Harry');
});
app.get('/about', (req, res)=>{
    res.send('This is about page of my first express app with Harry');
});
app.post('/about', (req, res)=>{
    res.send('This is a post request of about page of my first express app with Harry');
});
app.get('/contact', (req, res)=>{
    res.send('This is contact page of my first express app with Harry');
});
app.get('/this', (req, res)=>{
    res.status(404).send('This page is not found'); 
});
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});  