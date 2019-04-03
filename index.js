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
mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test?authSource=admin",
  {user: "admin", pass: "vsusm,mqlc999"},
  (err, res) => {
    if (err) {
      console.log(`ERROR: connecting to Database. ${ err }`);
    }
    app.listen(PORT, () => console.log(`Node server running on http://localhost:${ PORT }`));

    var kittySchema = new mongoose.Schema({
      name: String
    });
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    kittySchema.methods.speak = () => {
      var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
      console.log(greeting);
    }
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'
    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.speak(); // "Meow name is fluffy"

    // Guarda a fluffy en MongoDB
    fluffy.save((err, cat) => {
      if (err) return console.error(`Error al guardar a ${ cat.name }: ${ err }`);
      cat.speak();
    });

    // Guarda a silence en MongoDB
    silence.save((err, cat) => {
      if (err) return console.error(`Error al guardar a ${ cat.name }: ${ err }`);
      cat.speak();
    });

    // Busca a fluffy en MongoDB
    Kitten.find((err, kittens) => {
      if (err) return console.error(err);
      console.log(kittens);
    });
  });