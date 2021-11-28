const locals = require('../../locals');
const mongoose = require('mongoose');
const Agent = require('./model/Agent')
const {toAgentModel, toMongoAgent} = require('./mapper/modelMapper')
const {database} = locals;
const {mongoDB} = database;
const {userName, password, name, clusterName} = mongoDB;
const uri = `mongodb+srv://${userName}:${password}@${clusterName}.2lpor.mongodb.net/${name}?retryWrites=true&w=majority`;

const createMongoDbRepository = async () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    try {
        await mongoose.connect(uri, options)
        console.log('Successfully connected to mongo DB');
    } catch (e) {
        console.log(e);
        throw new Error(`Unable to connect to mongo DB: ${e}`);
    }

    return {
        getById: (id) => Agent.findById(id).then(agent => toAgentModel(agent._doc)),

        getAll: () => Agent.find().then(agents => agents.map(agent => toAgentModel(agent._doc))),

        create: (agent) => Agent.create(agent),

        update: (agent) => Agent.updateOne({_id: agent.id}, toMongoAgent(agent), {upsert: false}),

        deleteById: (id) => Agent.deleteOne({_id: id}),
    }
}

module.exports = createMongoDbRepository;