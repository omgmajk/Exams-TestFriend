// Imports
const express = require('express');
const dbDriver = require('better-sqlite3');
const dotenv = require('dotenv');

// Config
dotenv.config();

const cors = process.env.DEV === 'yes' ? require('cors') : false;
const port = process.env.PORT || 80;
const dbFile = process.env.DB || 'test.db';

// Connect to DB
const db = dbDriver('db/' + dbFile);

// Create the web server object as app
const app = express();

// If we have dev environment, load cors.
if(cors) {app.use(cors()); console.log('Server loaded with cors allowed.');}

// Serve static frontend with configuration
app.use(express.static('frontend', {
  dotfiles : 'deny',
  extensions : ['html', 'css', 'js']
}));

// Use json requests
app.use(express.json());

/* 
* Routes from the database are setup dynamically based on the structure
* of the database we import from SQLite3.
* Below are the API-routes.
*/

// Get all tables and views from SQLite
function setupAllRoutes() {
  let statement = db.prepare(`
    SELECT name, type FROM sqlite_schema
    WHERE
      type IN ('table', 'view')
      AND name <> 'sqlite%'
  `);
  let allTablesAndViews = statement.all();
  for (let {name, type} of allTablesAndViews) {
    setRoutesForDb(name, type);
  }
  console.log('All routes (get, post, put, delete) online and can be accessed from /api/');
}

// Set all routes dynamically and setup REST API
function setRoutesForDb(tableName, type) {
  
  // Get all items from route
  app.get('/api/' + tableName, (req, res) => {
    let statement = db.prepare(`
      SELECT * FROM ${tableName}
    `);
    let result = statement.all();
    res.json(result);
  });

  // Get a single item from route
  app.get('/api/' + tableName + '/:id', (req, res) => {
    let searchId = req.params.id;
    let statement = db.prepare(`
      SELECT * FROM ${tableName}
      WHERE id = :searchId
    `);
    let result = statement.all({
      searchId
    });
    res.json(result[0] || null);
  });

  // Create a new entry in any table
  app.post('/api/' + tableName, (req, res) => {
    let statement = db.prepare(`
      INSERT INTO ${tableName} (
        ${Object.keys(req.body).join(", ")}
      )
      VALUES (
        ${Object.keys(req.body).map(x => ":" + x).join(", ")}
      )
    `);
    let result = null;
    try {
      result = statement.run(req.body);
    } catch (error) {
      result = { error: error + "" }
    }
    res.json(result);
  });

  // Delete a single entry from a table
  app.delete('/api/' + tableName + '/:id', (req, res) => {
    let statement = db.prepare(`
      DELETE FROM ${tableName}
      WHERE id = :idToDelete
    `);
    let idToDelete = req.params.id;
    let result = statement.run({
      idToDelete
    });
    res.json(result);
  });

  // Delete all entries from a table
  app.delete('/api/' + tableName, (req, res) => {
    let statement = db.prepare(`
      DELETE FROM ${tableName}`
    );
    let result = statement.run();
    res.json(result);
  });

  // Put/Change one or more fields in a row
  app.put('/api/' + tableName + '/:id', (req, res) => {
    let result = null;
    try {
      let statement = db.prepare(`
        UPDATE ${tableName}
        SET ${Object.keys(req.body).map(x => x + " = :" + x).join(", ")}
        WHERE id = :id
      `);
    } catch (error) {
      result = { error: error + "" }
    }
    res.json(result);
  });
}

// Set up the routes
setupAllRoutes();

// Start web server
app.listen(port, () => {
  console.log(`Web server online and listening on port ${port}.`);
});