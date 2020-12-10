
//--------------------------------------------------------------------
// 							To Note
//--------------------------------------------------------------------

// 	* I can use any database mechanism supported by Node
//	* I created a variable 'app' as a reference to object 'Express' 
//	  so I can call 'express' built in functions/methods `app.get(), app.send()`
//	* req => request
//	* res => response
//	* `exports` can be used if you want to work with external files
//	  inside a author.js `exports.TheName = function(name) { return 'I am '+ name; };`
//	* To import variable/function from external file will use `require()`
//	  e.g const name = require('./author') <- js file name     
//	  console.log name.TheName('Jack')) 




// Explicitly call the 'express' package and import it
const express = require('express');

// assign the reference variable to empty variable 'app'
const app = express();

// create local sever
const host = 'http://127.0.0.1';

// Creates the port
const port = 3000;

const author = require('./author');

// This part will be invoked if there is a call to HTTP
//  '/' empty path means a  root path (if it was a website it will be a landing page)
//	e.g get('/user', (req, res) => will list all saved users

app.get('/', (req, res) => {

  // Sends the HTTP response.
  res.send('<html><h1>Hello World!</h1></html>')

  console.log(author.authorsName("Phumlani"));
});


app.listen(port, () => {
	console.log(`App Running on ${host}:${port}!`)
});

