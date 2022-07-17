require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const x = require('./src/Modules.js');

let pafhData = './dataBase/data.json';
//Scanneando as pastas
let scanner = x.scannerPafh('./html');

//Salvando  o caminho no datalocal
x.saveJSON({
  caminho: pafhData,
  conteudo: scanner
});

//Lendo o datalocal
console.log(x.loadJSON(pafhData));

//ROUTES
const authRouter = require('./src/routes/auth.router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta http://164.132.172.191:${PORT}`);
});