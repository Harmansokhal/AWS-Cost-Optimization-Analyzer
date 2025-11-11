const mongoose = require('mongoose');
const { Schema } = mongoose;


const BillingLineItem = new Schema({
billDate: { type: Date, index: true },
payerAccountId: String,
linkedAccountId: { type: String, index: true },
productName: { type: String, index: true },
service: String,
region: String,
usageType: String,
operation: String,
usageQuantity: Number,
cost: Number,
currency: String,
tags: { type: Map, of: String },
raw: { type: Object }
}, { timestamps: true });


module.exports = mongoose.model('BillingLineItem', BillingLineItem);
