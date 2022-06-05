'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.removeCaption = undefined;

var _apiService = require('../../api/api.service.js');

var removeCaption = function removeCaption(id) {
   _apiService.apiService.delete('delete-caption/' + id).then(function () {
      console.log('deleted');
   }).catch(function () {
      return console.error("There is an error on the server! Please try again");
   });
};

exports.removeCaption = removeCaption;
//# sourceMappingURL=delete-caption.js.map