const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); // Delcara Origin para dar o caminho da hospedagem
app.use(express.json());
app.use(routes);

app.listen(3333);