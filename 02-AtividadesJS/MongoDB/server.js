const express = require('express');
const app = express();


app.get('/', (req, res) => {
res.send('Hello world!<br>Server runing');
});

app.listen(3000);  