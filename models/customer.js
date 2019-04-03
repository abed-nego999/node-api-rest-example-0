var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
    nombre: { type: String },
    apellidos: { type: String },
    nacimiento: { type: Date },
    likes: { type: Number }
});
customerSchema.methods.darLike = function (callback) {
    var query = { _id: this._id };
    var nuevosLikes = this.likes += 1;
    this.constructor.update({ _id: this._id }, { likes: nuevosLikes }, callback);
    return `Uh, me dieron like. Ya tengo ${ nuevosLikes } likes`;
}

module.exports = mongoose.model('Customer', customerSchema);