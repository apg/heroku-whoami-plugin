'use strict';
exports.topic = {
  name: 'whoami',
  // this is the help text that shows up under `heroku help`
  description: 'prints to the console who you are currently logged in as'
};

exports.commands = [
  require('./commands/whoami.js')
];
