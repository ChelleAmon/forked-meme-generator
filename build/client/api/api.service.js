'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiService = undefined;

var _environment = require('../environments/environment.js');

var apiService = exports.apiService = {
    baseUrl: 'http://localhost:3001/api/',

    // baseUrl: environment.production ? 'http://localhost:3000/api/' : `${/api/}`,

    get: function get(url) {
        return fetch(this.baseUrl + url).then(function (res) {
            return res.json();
        });
    },

    delete: function _delete(url) {
        return fetch(this.baseUrl + url, {
            method: 'DELETE'
        }).then(function (res) {
            return res.json();
        }).then(function () {
            return window.location.reload();
        });
    },

    save: function save(url, data) {
        return fetch(this.baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            return res.json();
        });
    },

    edit: function edit(url, data) {
        return fetch(this.baseUrl + url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            return res.json();
        });
    }
};
//# sourceMappingURL=api.service.js.map