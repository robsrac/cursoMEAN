const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance', {useMongoClient: true})

mongoose.Error.messages.general.required = "O abrituto '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'"
