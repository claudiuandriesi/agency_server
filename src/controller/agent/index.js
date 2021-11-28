const createAgentService = require('../../service/agentService.js');
const createAgentRepository = require('../../repository/agentRepository.js');
const errorMessage = require('../error/message');
const express = require('express');
const isValidString = require('../validator/stringValidator');

const AGENT_PATH = '/agent';

const createAgentRoute = async () => {
    const agentRepository = await createAgentRepository();
    const agentService = createAgentService(agentRepository);

    const app = express.Router();
    app.get(`/:id`, (req, res, next) => {
        const agentId = req.params.id;
        if (!isValidString(agentId)) {
            res.status(400).send(errorMessage.NO_AGENT_ID_PARAM);
            return;
        }

        agentService.getById(agentId).then(agent => res.status(200).send(agent)).catch(() => res.status(404).send());
    });

    app.get('/', (req, res, next) => {
        agentService.getAll().then(agents => res.status(200).send(agents)).catch(() => res.send(500).send());

    });

    app.post('/', (req, res, next) => {
        agentService.create(req.body).then(() => res.status(200).send()).catch(() => res.status(500).send());
    });

    app.put('/:id', (req, res, next) => {
        const paramAgentId = req.params.id;

        if (!isValidString(paramAgentId)) {
            res.status(400).send(errorMessage.NO_AGENT_ID_PARAM);
            return;
        }

        if (!req.body) {
            res.status(400).send(errorMessage.NO_AGENT_BODY_IN_REQ);
            return;
        }

        const bodyAgentId = req.body.id;
        if (paramAgentId !== bodyAgentId) {
            res.status(400).send(errorMessage.AGENT_IDS_MISMATCH);
            return;
        }

        agentService.update(req.body).then(() => res.status(200).send()).catch((e) => res.status(404).send(e));
    });

    app.delete('/:id', (req, res, next) => {
        const agentId = req.params.id;
        if (!isValidString(agentId)) {
            res.status(400).send(errorMessage.NO_AGENT_ID_PARAM);
            return;
        }
        agentService.deleteById(agentId).then(() => res.status(204).send()).catch(() => res.status(404).send());
    });

    return express.Router().use(AGENT_PATH, app);
}

module.exports = createAgentRoute;


