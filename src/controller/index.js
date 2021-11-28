const express = require('express');
const createAgentRoute = require('./agent');

const createRoutes = async () => {
    const agentRoute = await createAgentRoute();

    const app = express.Router();
    app.use(express.json());
    app.use('/api', agentRoute);
    return app;
}


module.exports = createRoutes;
