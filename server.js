require('dotenv').config();
const express = require('express');
const hbs = require('express-handlebars');

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(require('./controllers'));

app.listen(port, ()=>{console.log(`Server Listening on ${port} go to https://localhost:${port}`)});

