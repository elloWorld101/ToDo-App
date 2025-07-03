const mongooseUrl = require("../config");
const mongoose = require("mongoose");

mongoose.connect(mongooseUrl.mongooseUrl);

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
