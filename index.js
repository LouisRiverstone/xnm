const express = require('express')
const vueStack = require('./vue-stack')
const app = express()
require("./ioevents")

vueStack(app, express, 3000)