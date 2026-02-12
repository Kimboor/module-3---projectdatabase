// Import Sequelize library
const Sequelize = require('sequelize');

// Import file system module (to read files in the folder)
const fs = require('fs');

// Import path module (to work with file paths safely)
const path = require('path');

// Get the current file name (index.js)
const basename = path.basename(__filename);

// Load environment variables from .env file
require('dotenv').config();


// Database connection configuration using environment variables
const connection = {
  dialect: process.env.DIALECT,              // Database type (mysql)
  dialectModule: process.env.DIALECTMODEL,   // Driver (mysql2)
  database: process.env.DATABASE_NAME,       // Database name
  username: process.env.ADMIN_USERNAME,      // Database username
  password: process.env.ADMIN_PASSWORD,      // Database password
  host: process.env.HOST                     // Database host
};

// Create Sequelize instance (connect to database)
const sequelize = new Sequelize(connection);

// Create empty object that will store everything
const db = {};

// Attach sequelize instance to db object
db.sequelize = sequelize;


// Read all files inside the current directory (models folder)
fs.readdirSync(__dirname)

  // Filter files:
  // - Ignore hidden files (starting with ".")
  // - Ignore this file (index.js)
  // - Only include .js files
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    );
  })

  // For each model file found
  .forEach(file => {

    // Import the model and initialize it
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);

    // Add the model to the db object using its model name
    db[model.name] = model;
  });


// Export db object so it can be used in app.js

console.log(db)

module.exports = db;




// this is the brain