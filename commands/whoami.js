'use strict';
let cli = require('heroku-cli-util');
module.exports = {
  topic: 'whoami',
  command: 'whoami',
  default: true,
  description: 'tells you who you are',
  help: 'tells you who you are currently logged in as.',
  needsAuth: true,
  run: cli.command(function (context, heroku) {
    heroku.account().info(function(err, info) {
      if (err) {
        cli.error("An error occurred, so I have no idea who you are. error: " + err);
      } else {
        console.log("You are logged in as " + info.name + " <" + info.email + ">");
      }
   });
 })
};


