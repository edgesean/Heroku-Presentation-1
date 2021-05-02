const express = require('express');
const port = 3009;
const app = express();
const router = require('./router')
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || port, () => console.log('running on port localhost:' + port));

