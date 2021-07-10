const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const rentSchema=mongoose.Schema({
    total_payment: {
        type: Number
    },
    total_days: {
        type: Number
    },
    start_date: {
        type: Date
    },
    end_date: {
        type: Date
    },
    status_operation: {
        type: String,
        enum: ["requested", "shipping", "closed"],
        default: "requested"
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.ObjectId,
        ref: 'Product'
    }
})
rentSchema.plugin(autoIncrement,'opr_NO');
const RentingOperation = mongoose.model('RentingOperation',rentSchema )

module.exports = RentingOperation;