'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiService = require('../../api/api.service.js');

var saveCaption = function saveCaption(tText, bText) {
    _apiService.apiService.save('create-caption', { topText: tText, bottomText: bText }).then(function () {
        console.log('caption saved' + tText + bText);
    }).catch(function () {
        return console.error('caption not saved, please try again');
    });
};

exports.default = saveCaption;
//# sourceMappingURL=save-caption.js.map