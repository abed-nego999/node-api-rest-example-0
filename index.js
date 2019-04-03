var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', (req, res) => res.send("Hello World!"));

app.use(router);
mongoose.connect("mongodb://admin:vsusm%2Cmqlc999@cluster0-f3avm.mongodb.net/test", (err, res) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${ err }`);
  }
  app.listen(PORT, () => console.log(`Node server running on http://localhost:${ PORT }`));
});