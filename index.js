/*
 * Import required packages.
 * Packages should be installed with "npm install" and then initialized as variables.
 */
const express = require('express');
const router = express.Router();

/*
 * Set-up and run the Express app.
 */
const app = express();
app.listen(process.env.PORT || 5000);
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Anything that doesn't match the above, send back the index.html file
app.get('/', (req, res) => {

})

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
