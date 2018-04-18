// const express = require('express');
// const path = require('path');
// const generatePassword = require('password-generator');

// const app = express();

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Put all API endpoints under '/api'
// app.get('/api/passwords', (req, res) => {
//   const count = 5;

//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map(i =>
//     generatePassword(12, false)
//   )

//   // Return them as json
//   res.json(passwords);

//   console.log(`Sent ${count} passwords`);
// });

// // The 'catchall' handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log(`Server running and listening on localhost:${port}`);


const database = require('./models/index'),
    epilogue = require('epilogue'),
    express = require('express'),
    bodyParser = require('body-parser');

// Define your models with Sequelize
// This is equivalent to defining Doctrine entities
// let database = new Sequelize('landy', 'root', '', {
//   host: '127.0.0.1',
//   dialect: 'mysql',

//  //  dialectOptions: {
// 	// socketPath: 'C:/xampp/mysql/mysql.sock'
//  //  },

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }

//   // SQLite only
//   // storage: 'path/to/database.sqlite'
// });


// let User = database.define('User', {
//   username: {
//   	type: Sequelize.STRING
//   },
//   firstname: {
//     type: Sequelize.STRING
//   },
//   lastname: {
//     type: Sequelize.STRING
//   }
// });

// force: true will drop the table if it already exists
// User.sync({force: true}).then(() => {
//   // Table created
//   return User.create({
//   	username:'jcock',
//     firstname: 'John',
//     lastname: 'Hancock'
//   });
// });

// Create an Express server
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Plug Epilogue into Express
epilogue.initialize({
  app: app,
  sequelize: database.sequelize
});

let User = require('./models/user');

console.log(User);

// Configure a REST resource endpoint with Epilogue
let userResource = epilogue.resource({
  model: User,
  endpoints: ['/users', '/users/:id']
});

// And that's it, GET/POST and DELETE will be available for your user entity.
app.listen(() => {
    console.log('Server started!');
});