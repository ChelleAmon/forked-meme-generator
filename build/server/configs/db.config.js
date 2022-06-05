'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _rootConfig = require('./root.config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoUri = _rootConfig.envConfig.mongoUri || _rootConfig.envConfig.localMongoUri;

exports.default = _mongoose2.default.connect(mongoUri).then(function () {
    console.log("connected to DB successfully");
}).catch(function (err) {
    console.log("Failed to connect to DB", err);
});
//# sourceMappingURL=db.config.js.map