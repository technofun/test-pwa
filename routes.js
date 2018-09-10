const express = require('express');
const router = express.Router()
const uuid = require('uuid');
// const app = express();
const Todo = [];


router.get('/todo', function (req, res) {
    res.send({
    data: Todo
    }

    );
});

router.get('/todo/:id',function(req,res){
  const {id} = req.params;
  console.log("=============GET=========")
console.log(req.params.id);

for(var i=0; i < Todo.length; i++){
    if(Todo[i].id === id);
    return;
}

    res.status(404).send({message: "item not found"});
});

router.post('/todo',function(req,res){
console.log ("===============post==========");
console.log(req.body);
console.log('==========post==========');

const obj = {

    id :uuid(),
    todo:req.body.todo,
    done: false,
    createtodoAt: new Date()
};
    Todo.push(obj);
    res.send(obj);
});



// app.get('/',function(req,res){
//     res.send('hallo server');
// });
