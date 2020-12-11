


// default mangoose connection
// const mangoDb = 'mangodb://127.0.0.1/fruits_DB';

//get the connection
// const db = mangoose.connection;

// bind connection with error




const express = require('express');

const app = express();

//import the mangoose module
var mangoose = require('mangoose');

const port = 3001;

let fruits = ["apple","mango","banana"];

app.get('/',(req,res)=>{
	for(let i=0;i< fruits.length;i++){
	console.log(fruits[i])	
	}
	
	res.send("<html><h1>Fruits DB</h1></html>");
});


app.listen(port,function() {
	console.log('listening to '+ port);
});