const express = require("express");
const routes = require("./routes/api");

// set up express app
const app = express();

app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 8080, function(){
	console.log('now listening for requests');
})