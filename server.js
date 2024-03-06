const { json } = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');
const { send } = require('process');


app.get("/",(req,res)=>{
    fs.readFile("home.html","utf-8",(err,data)=>{
        if(err)
         console.log(err);
        else
         res.send(data);
    })
})

app.get("/addtask",(req,res)=>{
    fs.readFile("addtask.html","utf-8",(err,data)=>{
        if(err)
         console.log(err)
        else{
            res.send(data);
        }
    })
})

app.get("/add",(req,res)=>{
    const newData = [
        {
            title:req.query.title,
            id:req.query.id,
            status:req.query.status
        }
    ]
    console.log(newData);
    fs.readFile("todo.json","utf-8",(err,data)=>{
        if(err)
         console.log(err);
        else{
           const existingData = JSON.parse(data);
           const updatedData = [...existingData,...newData];
           fs.writeFileSync("todo.json",JSON.stringify(updatedData,null,2));
           res.end("Task is Added");
        }
    })
})

app.get("/tasks",(req,res)=>{
    fs.readFile("tasks.html","utf-8",(err,data)=>{
        if(err)
         console.log(err);
        else
         res.send(data);
    })
})

app.get("/akk",(req,res)=>{
    fs.readFile("todo.json","utf-8",(err,data)=>{
        if(err)
         console.log(err);
        else{
            data = JSON.parse(data);
            const filteredtasks = data.filter(tasks => tasks.status === req.query.status);
              res.json(filteredtasks);
            }
        })
        }
    )


app.get("/alltasks",(req,res)=>{
    fs.readFile("todo.json","utf-8",(err,data)=>{
        if(err)
         console.log(err);
        else{
            data = JSON.parse(data);
            res.send(data);
        }
    })
})

app.listen(3001,(err)=>{
    if(err)
     console.log(err);
    else
     console.log("Server Started At Post No. 3001");
})