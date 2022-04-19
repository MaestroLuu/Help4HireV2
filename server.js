require("dotenv").config();
const express = require("express");
const path = require("path");
const sequelize = require(".config/connection");
const router = require("./controllers");
const helpers = require("./utils/helpers");
const sessionMiddleWare = require("./config/session");