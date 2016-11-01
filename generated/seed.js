/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

*/

const chalk = require('chalk')
const db = require('./server/db')
const User = db.model('user')

const users = [
    { email: 'testing@fsa.com', password: 'password' },
    { email: 'obama@gmail.com', password: 'potus' }
]

db.sync({ force: true })
    .then(() => Promise.all(users.map(user => User.create(user))))
    .then(() => {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
