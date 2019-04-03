var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    nombre: { type: String },
    apellidos: { type: String },
    nacimiento: { type: Date },
    likes: { type: Number }
});
customerSchema.methods.darLike = function () {
    return `Uh, me dieron like. Ya tengo ${ this.likes } likes`;
}

module.exports = mongoose.model('Customer', customerSchema);