'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _captionRoute = require('./caption.route.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRouter = exports.apiRouter = _express2.default.Router();

apiRouter.use('/api', _captionRoute.captionRouter);

apiRouter.use(function (req, res, next) {
    if (res.locals.data) {
        console.log(res.locals.data);
        res.status(200).json({ data: res.locals.data });
    } else {
        next();
    }
});

apiRouter.use(function (err, req, res, next) {
    if (err.name === 'ValidationError') {
        res.status(400).send(err);
    }
    res.status(500).send(err);
});

apiRouter.all("/*", function (req, res) {
    console.log("Not Found");
    res.sendStatus(404);
});
//# sourceMappingURL=api.routes.js.map