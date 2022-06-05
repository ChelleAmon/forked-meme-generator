'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _apiService = require('../../api/api.service.js');

function displayAllCaptions(cb1, cb2) {
    _apiService.apiService.get('captions').then(function (captions) {
        captions.forEach(function (caption) {
            var table = document.getElementById('caption-table');
            var rowCaption = document.createElement('tr');
            var cellTopText = document.createElement('td');
            // cellTopText.setAttribute('contenteditable', 'false')
            var cellBottomText = document.createElement('td');
            // cellBottomText.setAttribute('contenteditable', 'false')
            var cellButtons = document.createElement('td');

            var editButton = document.createElement('button');
            var deleteButton = document.createElement('button');

            editButton.innerHTML = "Edit";
            deleteButton.innerHTML = "Delete";

            editButton.className = "edit-btn";
            deleteButton.className = "delete-btn";

            deleteButton.addEventListener('click', function () {

                //callback
                cb1(caption._id);
            });

            cellTopText.innerHTML = '' + caption.topText;
            cellBottomText.innerHTML = '' + caption.bottomText;

            cellButtons.appendChild(editButton);
            cellButtons.appendChild(deleteButton);

            editButton.addEventListener('click', function () {
                if (editButton.innerHTML == 'Edit') {
                    cellTopText.setAttribute('contenteditable', 'true');
                    cellBottomText.setAttribute('contenteditable', 'true');
                    cellTopText.style.backgroundColor = 'yellow';
                    cellBottomText.style.backgroundColor = 'yellow';
                    editButton.innerHTML = 'Save';
                    editButton.style.background = 'Yellow';
                    console.log('Edit');
                } else if (editButton.innerHTML == 'Save') {
                    console.log('I Saved');
                    cellTopText.setAttribute('contenteditable', 'false');
                    cellBottomText.setAttribute('contenteditable', 'false');
                    cellTopText.style.backgroundColor = '#fddaff';
                    cellBottomText.style.backgroundColor = '#fddaff';
                    editButton.innerHTML = 'Edit';
                    editButton.style.background = 'Green';

                    cb2(caption._id, cellTopText.innerText, cellBottomText.innerText);
                }
                console.log('Done');
            });

            rowCaption.appendChild(cellTopText);
            rowCaption.appendChild(cellBottomText);
            rowCaption.appendChild(cellButtons);

            table.appendChild(rowCaption);
        });
    });
}

exports.default = displayAllCaptions;
//# sourceMappingURL=all-captions.js.map