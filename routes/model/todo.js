const { Schema, model } = require ("mongoose");


const Todo = new Schema({
    name: {
        type: String,
        required : true,
    },
    completed: {default: false, type: Boolean},
},
{timestamps:true}
);

module.exports = model("todos", Todo);