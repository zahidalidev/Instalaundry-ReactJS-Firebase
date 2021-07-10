const express = require('express');
const apiRouter = require('./routes/routes');
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// using cors to for public API
app.use(cors())
app.use(express.json());

if (!config.get('pstPivateKey')) {
    throw new Error('FATAL ERROR: pstPivateKey is not defined. ');
}

app.get('/test1', (req, res) => {
    return res.send("hi test1")
})

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));