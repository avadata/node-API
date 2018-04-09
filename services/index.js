import cors from 'cors';
import { app, corsOptions } from '../config/app.js';

app.get('/hello-to-api', cors(corsOptions), (req, res) => {
    const data = {
        message: 'Welcome to node API services !'
    };
    res.send(data);
});

module.exports = app;
