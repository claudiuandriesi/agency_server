const express = require('express');
const createRoutes = require('./controller');
const http = require('http');
const { port } = require('./locals')
const cors = require('cors');

const app = express();
const corsConfiguration = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsConfiguration));

createRoutes().then(routes => {
    app.use(routes);

    http.createServer(app).listen(port);

    console.log(`Agency server running on port: ${port}`)
})

module.exports = app;
