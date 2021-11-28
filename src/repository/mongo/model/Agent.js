const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agentSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    address: {
        type: Object,
        required: false,
    }
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;