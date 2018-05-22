
import express from 'express';
import bodyParser from 'body-parser';

const corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// Create a server with a host and port
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add the sercret key
const SECRET_KEY = 'supersecret';
export { app, corsOptions, SECRET_KEY };
// module.exports = app;
