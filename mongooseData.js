const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({

    name: String,
    Email: String
 
  })
  
  const Person = mongoose.model('Person', personSchema);
  
  exports.createPerson = (name, Email) => {
      var person = new Person({
         
          name: name,
          Email: Email
      })
  
      return person
  }

exports.getMessages = async() => {
    var data = await Data.find({});

    return data
}