const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const socketio = require("@feathersjs/socketio");
const moment = require("moment");

// Idea Service

const app = express(feathers());

// Parse JSON
app.use(express.json());

// Configure Socketio Realtime APIs
