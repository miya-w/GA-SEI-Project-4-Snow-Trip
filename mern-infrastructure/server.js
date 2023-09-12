const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

// Connect to the database
require('./config/database'); 
   
const app = express();
   
app.use(logger('dev'));
app.use(express.json());

 // Configure both serve-favicon & static middleware
 // to serve from the production 'build' folder
 app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
 app.use(express.static(path.join(__dirname, 'build')));

 // Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

 const port = process.env.PORT || 3001;
 // Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/notes', require('./routes/api/notes'));


// Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
// -> maybe? 
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
	
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, function() {
   console.log(`Express app running on port ${port}`)
 });