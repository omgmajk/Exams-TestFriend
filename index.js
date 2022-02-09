// Imports
const express = require("express");
const dbDriver = require("better-sqlite3");

// Config
const port = 80;
const lang = "en";

// Create the web server object as app
const app = express();

// Serve static frontend with configuration
app.use(express.static('frontend', {
  dotfiles : 'deny',
  extensions : ['html']
}));

// Use json requests
app.use(express.json());

// Start web server
app.listen(port, () => {
  console.log(`Web server online and listening on port ${port}.`);
});