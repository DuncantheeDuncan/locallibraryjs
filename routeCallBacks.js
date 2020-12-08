
//--------------------------------------------------------------------
// 							To Note
//--------------------------------------------------------------------
//	* I can provide multiple callback functions that behave like middle-ware to 
//	  handle a request
//	  If you have more than one call back `next()` will be used more on route handlers https://expressjs.com/en/guide/routing.html#route-handlers
//
//	  app.get('/example/b', function (req, res, next) {
//	  console.log('the response will be sent by the next function ...')
//	  next() < -- calls the next callback
//	  }, function (req, res) {
//	  res.send('Hello from B!')
//	  })
//	* If you will have multiple call backs, res.send('something'); must be on the last call back ???



// Explicitly call the 'express' package and import it
const express = require('express');

// assign the reference variable to empty variable 'app'
const app = express();

// create local sever
const host = 'http://127.0.0.1';

// Creates the port
const port = 4000;


// multiple call back
app.get('/a', function (req, res, next) {
	console.log('the response will be sent by the next function ...');
  //res.send('Hello from A!');
  next()
}, function (req, res) {
	res.send('Hello from B!')
})


//  array of callback functions 

const cb0 = function (req, res, next) {
	console.log('CB0')
	next()
}

const cb1 = function (req, res, next) {
	console.log('CB1')
	next()
}

const cb2 = function (req, res) {
  res.send('Hello from C!') // < -- only function with send()
}

app.get('/ex/c', [cb0, cb1, cb2]) // <-- call the functions is a square brackets



app.listen(port, () => {
	console.log(`App Running on ${host}:${port}!`)
});