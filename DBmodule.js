  
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/account', { useNewUrlParser: true,  useUnifiedTopology: true  } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {

});

exports.saveInput = (input) => {
    input.save(() => {
        console.log("Its working")
    })

}