const express = require('express');
const apiRouter = require('./routes/routes');
const cors = require('cors')

const app = express();

// using cors to for public API
app.use(cors())
app.use(express.json());

app.use('/api/donate', apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));