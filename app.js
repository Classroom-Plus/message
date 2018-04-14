const express = require('express');
const app = express();

const path = require('path');
const body_parser = require('body-parser');

const view = require('./view');


/* ----------  body_parser  ---------- */
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

/* ----------  Routes  ---------- */
app.use(view);
/* --------- static ---------*/
app.use(express.static('test'));
module.exports = app;