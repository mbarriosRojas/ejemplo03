const express = require('express');
const app = express();
const port = 3000;
const conductoresRouter = require('./routes/conductores');

app.use(express.json());
app.use('/conductores', conductoresRouter);

app.listen(port, () => {
  console.log(`Server escuchando en el puerto ${port}`);
});
