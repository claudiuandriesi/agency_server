const createMongoDbRepository = require('./mongo/mongoDBAgentRepository');

const createAgentRepository = async () => {
    let database = await createMongoDbRepository();
    return {
        getById: (id) => database.getById(id),

        getAll: () => database.getAll(),

        create: (agent) => database.create(agent),

        update: (agent) => database.update(agent),

        deleteById: (id) => database.deleteById(id),
    };
}


    module.exports = createAgentRepository;