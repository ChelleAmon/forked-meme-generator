'use strict';

var _createMeme = require('../meme/services/create-meme.js');

var makeAMeme = _interopRequireWildcard(_createMeme);

var _displayInfo = require('../meme/services/display-info.js');

var _displayInfo2 = _interopRequireDefault(_displayInfo);

var _randomizeCaption = require('../caption/services/randomize-caption.js');

var randomizeCaption = _interopRequireWildcard(_randomizeCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _displayInfo2.default)();
//# sourceMappingURL=index.js.map