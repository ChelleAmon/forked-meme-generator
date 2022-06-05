'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CaptionModel = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CaptionSchema = _mongoose2.default.Schema({
    topText: { type: String },
    bottomText: { type: String }
});

var CaptionModel = exports.CaptionModel = _mongoose2.default.model('Caption', CaptionSchema);
//# sourceMappingURL=caption.schema.js.map