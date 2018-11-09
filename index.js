const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors())
const port = 9000;

const configureMiddleware = require('./config/middleware');
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

configureMiddleware(server);

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send('Hello')
})

server.listen(port, () => console.log(`\n ==^_^== ${port} ==^_^==`))