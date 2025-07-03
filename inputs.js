const zod = require("zod");

const TodoInputs = zod.object({
    title: zod.string().min(1),
    
})

module.exports= {
    TodoInputs
}