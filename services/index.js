import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { app, corsOptions, SECRET_KEY } from '../config/app.js';

app.get('/hello-to-api', cors(corsOptions), (req, res) => {
    const data = {
        message: 'Welcome to node API services !'
    };
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, SECRET_KEY, (err, decode) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failded to authenticate token.' });
        res.send(data);
    });
});
app.post('/register', cors(corsOptions), (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    };

  // create a token
    const token = jwt.sign({ id: user.id }, SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token });
});
app.post('/getuser', cors(corsOptions), (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) { return res.status(401).send({ auth: false, message: 'No token provided.' }); }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        res.status(200).send(decoded);
    });
});

module.exports = app;
