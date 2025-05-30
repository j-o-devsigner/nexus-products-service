const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const errors = require('./network/errors')
const router = require('./components/products/router')
const config = require('./config')

const PORT = config.products_port || 3003
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', router);

app.use(morgan("dev"));
app.use(errors);

app.listen(PORT, () => {
    console.log('products in', PORT);
});