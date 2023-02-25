const { Schema, model } = require ("mongoose");


const Todo = new Schema({
    text: {
        type: String,
    },
    finished: {default: false, type: Boolean},
},
);

module.exports = model("todos", Todo);