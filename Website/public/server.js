const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname,"public");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req,res) => {
    console.log('listening..........')
})