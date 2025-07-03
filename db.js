const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:05052824@cluster0.962hh.mongodb.net/BasicTodo?retryWrites=true&w=majority&appName=Cluster0");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}