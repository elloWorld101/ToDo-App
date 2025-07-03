const express = require("express");
const router = express.Router();
const { TodoInputs } = require("../zod/inputs"); //jo vaha se export kiya hai vahi I can import here for {} wala 
// but can do any name ka import in default wala -- see router ko MainRouter ke naam se import
const { Todo } = require("../databases/db");

router.post("/tasks", async function(req,res){
    const title = req.body.title;

    const inputCheck = TodoInputs.safeParse({
        title: title
    });
    
    if(inputCheck.success){
        const response = await Todo.create({
            title: title,
        })

        if(response){
            return res.status(200).json({
                msg: "Todo successfully created"
            })
        }else{
            return res.status(500).json({
                msg: "Internal Server Error"
            })
        }

    }else{
        return res.status(400).json({
            msg: "Wrong Inputs"
        })
    }

})

router.get("/tasks", async function(req,res){
    const response = await Todo.find({});
    if(response){
        return res.status(200).json({
            Todos: response
        })
    }else{
        return res.status(500).json({
            msg: "Internal Server Error"
        })
    }
    
})

router.put("/tasks/:id", async function(req,res){ //this is route parameter
    const id = req.params.id;

    const todo = await Todo.findOneAndUpdate({_id: id}, { //{query}, {update}
        $set: { 
            completed: true
        }
    })


    if(todo){
        return res.status(200).json({
            msg: "Todo successfully completed"
        })
    }else{
        return res.status(400).json({
            msg: "Bad Request"
        })
    }

})

router.delete("/tasks/:id", async function(req,res){
    const id = req.params.id;

    const todo = await Todo.deleteOne({
        _id: id
    })


    if(todo){
        return res.status(200).json({
            msg: "Todo successfully deleted"
        })
    }else{
        return res.status(400).json({
            msg: "Bad request"
        })
    }

})  


module.exports = router;