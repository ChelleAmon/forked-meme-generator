'use strict';

var _rootConfig = require('./configs/root.config.js');

var rootConfig = _interopRequireWildcard(_rootConfig);

var _dbConfig = require('./configs/db.config.js');

var dbConfig = _interopRequireWildcard(_dbConfig);

var _apiRoutes = require('./routes/api.routes.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var port = process.env.PORT || 3001;
var app = rootConfig.app;

app.use('/', _apiRoutes.apiRouter);

app.get('/', function (req, res) {
  res.json({ message: "Welcome to Meme Generator App" });
});

app.all('*', function (req, res) {
  var filePath = rootConfig.filePath;
  res.sendFile(filePath);
});

app.listen(port, function () {
  console.log('listening to http://localhost:' + port);
});
//# sourceMappingURL=server.js.map