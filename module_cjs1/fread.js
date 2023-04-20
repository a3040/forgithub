const fs = require('fs');

module.exports = {
  read: function(file) {
    return fs.readFileSync(file, 'utf8');
  }
};