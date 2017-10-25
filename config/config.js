var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'teamwork-platform'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/teamwork-platform-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'teamwork-platform'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/teamwork-platform-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'teamwork-platform'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/teamwork-platform-production'
  }
};

module.exports = config[env];
