const express = require ('express');
const app = express ();

app.use (express.urlencoded({extend:true}));
app.get (express.json ());

