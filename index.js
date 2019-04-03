var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    customers = require('./models/customer.js');

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => res.send("Hello World!"));

app.use(router);
mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test?authSource=admin",
  {user: "admin", pass: "vsusm,mqlc999"},
  (err, res) => {
    if (err) {
      console.log(`ERROR: connecting to Database. ${ err }`);
    }
    app.listen(PORT, () => {
      console.log(`Node server running on http://localhost:${ PORT }`);
      customers.find((err, results) => {
        if (err) {
          console.log(`Error en find customers: ${ err }`);
        } else {
          console.log(`Resultado de find: ${ results }`);
        }
      });
    });
  });