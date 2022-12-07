const mongoose = require('mongoose');
const { Schema } = mongoose

const taskSchema = new Schema({
    cityR: { type: String, required: true },
    dirR: { type: String, required: true },
    nameR: { type: String, required: true },
    tipoP: { type: String, required: true },
    cityD: { type: String, required: true },
    dirD: { type: String, required: true },
    nameD: { type: String, required: true },
    celD: { type: String, required: true }

})

module.exports = mongoose.model("taskModel", taskSchema)