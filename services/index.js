import cors from 'cors';
import { app, corsOptions } from '../config/app.js';

app.get('/hello-to-api', cors(corsOptions), (req, res) => {
    const data = {
        message: 'Welcome to node API services !'
    };
    console.log(req.query);
    res.send(data);
});


module.exports = app;
