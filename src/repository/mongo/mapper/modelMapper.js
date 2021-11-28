const toMongoAgent = agent => {
    if (!agent) {
        return null;
    }
    const mongoAgent = {
        _id: agent.id,
        ...agent,
    }
    delete mongoAgent.id;
    return mongoAgent;
};

const toAgentModel = mongoAgent => {
    if (!mongoAgent) {
        return null;
    }
    const agent = {
        id: mongoAgent._id,
        name: mongoAgent.name,
        email: mongoAgent.email,
        address: mongoAgent.address ? {
            address1: mongoAgent.address.address1,
            address2: mongoAgent.address.address2,
            country: mongoAgent.address.country,
            city: mongoAgent.address.city,
            zip: mongoAgent.address.zip,
            state: mongoAgent.address.state,
        } : null
    }
    delete agent._id;
    return agent;
};

module.exports = {
    toAgentModel,
    toMongoAgent
}