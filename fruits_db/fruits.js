


const express = require('express');

const app = express();

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