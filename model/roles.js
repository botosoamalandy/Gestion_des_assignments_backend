let mongoose = require("mongoose");
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let RolesSchema = Schema({
 id: Number,
 roles_name: String
});


RolesSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUDa
module.exports = mongoose.model("roles", RolesSchema, "roles");
