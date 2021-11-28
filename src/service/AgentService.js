const createAgentService = (agentRepository) => ({

    getById: (id) => agentRepository.getById(id),

    getAll: () => agentRepository.getAll(),

    create: (agent) => agentRepository.create(agent),

    update: (agent) => agentRepository.update(agent),

    deleteById: (id) => agentRepository.deleteById(id),
});

module.exports = createAgentService;