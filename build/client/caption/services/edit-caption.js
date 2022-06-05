'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editCaption = undefined;

var _apiService = require('../../api/api.service.js');

var editCaption = function editCaption(id, tText, bText) {
    _apiService.apiService.edit('edit-caption/' + id, { topText: tText, bottomText: bText }).then(function () {
        console.log('caption saved' + tText + bText);
    }).catch(function () {
        return console.error('caption not saved, please try again');
    });
};

exports.editCaption = editCaption;
//# sourceMappingURL=edit-caption.js.map