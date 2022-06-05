'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filePath = exports.envConfig = exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var envConfig = {
    mongoUri: process.env.mongo_uri,
    localMongoUri: process.env.local_mongo_uri
};

var __dirname = _path2.default.resolve();
var clientPath = _path2.default.join(__dirname, '/src/client');
var filePath = _path2.default.join(clientPath, '/index.html');

console.log(clientPath);

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.json());
app.use(_express2.default.static(clientPath));

exports.app = app;
exports.envConfig = envConfig;
exports.filePath = filePath;
//# sourceMappingURL=root.config.js.map