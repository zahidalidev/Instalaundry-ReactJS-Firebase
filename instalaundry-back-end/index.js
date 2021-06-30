const express = require('express');
const apiRouter = require('./routes/routes');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// using cors to for public API
app.use(cors())
app.use(express.json());

app.use('/api', apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));