const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient: true})

mongoose.Error.messages.general.required = "O abrituto '{PATH}' é obrigatório"
