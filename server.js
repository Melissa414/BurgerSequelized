var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

var models  = require('./models');

var sequelizeConnection = models.sequelize;

sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

.then(function(){

  console.log("Not resetting the database");
})


app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = 3000;

app.listen(process.env.PORT || PORT);