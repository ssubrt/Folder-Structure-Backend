const express = require('express');
const app = express();
const router = express.Router();
const homepingController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes')


router.use('/todos', todoRouter)
