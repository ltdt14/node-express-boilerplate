const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// load env vars if .env exists
if (fs.existsSync(path.join(__dirname, './.env'))) dotenv.load();
else throw new ReferenceError('You need an .env file!');

const port =
    process.env.NODE_ENV === 'production'
        ? process.env.PORT || 3000
        : process.env.DEV_PORT || 3000;

// middleware
// log every request to the console
app.use(morgan(':method :url :status :response-time ms'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', require('./routes/index'));

// listen
app.listen(port, () => {
    console.info(`Server is listening on port ${port}!`);
});

exports.app = app;