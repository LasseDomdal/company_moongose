// Company.js
const mongoose = require('mongoose');

const company = new mongoose.Schema({
    name: String,
    hours: Number,
    employees: [{ type: mongoose.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Company', company);