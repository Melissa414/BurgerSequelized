var connection = require('../config/connection.js');

// 

var orm = {
  all: function (tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
    // vals is an array of values that we want to save to cols
    // cols are the columns we want to insert the values into
  create: function (table, cols, vals, cb) {
    var queryString = 'INSERT INTO burgers (burger_name, devoured, date) VALUES ("' + cols + '", false, CURDATE());';


    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
    // objColVals would be the columns and values that you want to update
    // an example of objColVals would be {name: panther, sleepy: true}
  update: function (table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;


    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;