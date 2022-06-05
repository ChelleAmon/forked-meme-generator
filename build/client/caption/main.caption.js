"use strict";

var _allCaptions = require("../caption/services/all-captions.js");

var _allCaptions2 = _interopRequireDefault(_allCaptions);

var _deleteCaption = require("../caption/services/delete-caption.js");

var _editCaption = require("./services/edit-caption.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//passing a callback function named removeCaption
(0, _allCaptions2.default)(_deleteCaption.removeCaption, _editCaption.editCaption); //import functions from the other js files
//# sourceMappingURL=main.caption.js.map