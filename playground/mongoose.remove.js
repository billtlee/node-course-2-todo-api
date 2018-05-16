const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

// remove all documents
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5afb8ed0e10d1e768f84add5'}).then((todo) => {
//   console.log(todo);
// });

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5afb8ed0e10d1e768f84add5').then((todo) => {
  console.log(todo);
});