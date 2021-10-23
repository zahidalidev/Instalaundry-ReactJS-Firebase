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

// if (!process.env.pstPivateKey) {
//     throw new Error('FATAL ERROR: pstPivateKey is not defined. ');
// }

app.set('port', (process.env.PORT || 5000));


app.use('/api', apiRouter);

app.listen(app.get("port"), function () {
    console.log("Node app is running on port " + app.get('port'));
});
