const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

var id = '5afa519c444fddb0b9acf076';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id // return [] instead of null
// }).then((todos) => {
//   console.log('Todos: ', todos)
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo)
// });

Todo.findById(id).then((todo) => {
  if (!todo) { //to handle valid id's that doesn't exist with the if statement checking for null
    return console.log('ID not found');
  }
  console.log('Todo by ID: ', todo)
}).catch((e) => console.log(e)); //to handle invalid id's with catch