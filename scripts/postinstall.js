#!/usr/bin/env node

"use strict";

var path = require("path");
var fs = require("fs");

const ROOT_DIR = path.join(__dirname,"..");
const SRC_DIR = path.join(ROOT_DIR,"src");
const TEST_DIR = path.join(ROOT_DIR,"test");

fs.symlinkSync(path.join("..","src"),path.join(TEST_DIR,"js"),"dir");
fs.symlinkSync(path.join("..","dist","external"),path.join(SRC_DIR,"external"),"dir");
