const express = require('express');
const bodyParser = require('body-parser');

const apirouter = require('./routers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use('/api', apirouter); // localhost:3000/api/v2/ping

const PORT=3001
app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});

/**
 * How will u manage these kind of routes using express router ? 
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 *  localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/users/:id
 */