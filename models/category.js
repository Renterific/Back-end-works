const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose);

const categoryScheme= mongoose.Schema({
    title: {
        type: String,
        unique: true,
        index: true
    },
    decs: {
        type: String
    }
})
categoryScheme.plugin(autoIncrement.plugin,'productNO');
const Category = mongoose.model('Category',categoryScheme)

module.exports = Category