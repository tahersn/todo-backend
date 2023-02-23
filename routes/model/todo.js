const { Schema, model } = require ("mongoose");


const Todo = new Schema({
    text: {
        type: String,
        required : true,
    },
    finished: {default: false, type: Boolean},
},
);

module.exports = model("todos", Todo);