const express = require('express');
const port = 3005;
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`running on localhost:${port}`))

