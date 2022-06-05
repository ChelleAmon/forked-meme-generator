'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.updateMemeCanvas = updateMemeCanvas;

var _saveCaption = require('../../caption/services/save-caption.js');

var _saveCaption2 = _interopRequireDefault(_saveCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memeFile = document.getElementById('uploadMeme');
var topTextInput = document.getElementById('topText');
var botTextInput = document.getElementById('botText');
var canvas = document.getElementById('Canvas');
var button = document.getElementById('btn');

var maxHeight = 400;
var maxWidth = 800;
var imgValue = void 0;

var image = void 0;
var imageDataURL = void 0;

topTextInput.addEventListener("change", function () {
    updateMemeCanvas();
});

botTextInput.addEventListener("change", function () {
    updateMemeCanvas();
});

memeFile.addEventListener('change', function () {
    imageDataURL = URL.createObjectURL(memeFile.files[0]);
    image = new Image();
    image.src = imageDataURL;

    image.addEventListener("load", function () {
        if (canvas.getContext('2d')) {
            updateMemeCanvas();
        } else {
            alert('Your browser does not support this image format');
        }
    }, { once: true });
});

function updateMemeCanvas() {

    if (!image) return;

    var ctx = canvas.getContext('2d');
    ctx.beginPath();

    // function to wrap text on captions
    var wrapText = function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = words.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = _slicedToArray(_ref, 2);

                var index = _ref2[0];
                var _w = _ref2[1];

                var testLine = line + _w + ' ';
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > maxWidth && index > 0) {
                    ctx.fillText(line, x, y);
                    ctx.strokeText(line, x, y);
                    line = _w + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        ctx.fillText(line, x, y);
        ctx.strokeText(line, x, y);
    };

    // establish image size
    var width = image.width;
    var height = image.height;
    var yOffSet = maxHeight / 7;
    var w = void 0;
    var h = void 0;

    // Resize image within max bounds
    if (width > maxWidth) {
        imgValue = width / maxWidth;
        w = width / imgValue;
        h = height / imgValue;
    } else if (height > maxHeight) {
        imgValue = height / maxHeight;
        w = width / imgValue;
        h = height / imgValue;
    } else {
        w = width;
        h = height;
    }

    // load the canvas background
    canvas.width = w;
    canvas.height = h;

    console.log(canvas.width);
    ctx.drawImage(image, 0, 0, w, h);

    var lineHeight = 35;
    var x = w / 2;
    var y = 80;

    // styling the meme text
    ctx.font = 'Bold 40px Sans-serif';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';

    // adding the top meme text
    ctx.textBaseline = 'Top';
    ctx.textAlign = 'center';
    // ctx.fillText(topText.value, w / 2, yOffSet);
    // ctx.strokeText(topText.value, w / 2, yOffSet);
    wrapText(ctx, topText.value, x, y, maxWidth, lineHeight);

    // adding the bottom text
    ctx.textBaseline = 'Bottom';
    // ctx.fillText(botText.value, w / 2, h - yOffSet);
    // ctx.strokeText(botText.value, w / 2, h - yOffSet);
    wrapText(ctx, botText.value, x, h - yOffSet, maxWidth, lineHeight);
}

var saveButton = document.getElementById('saving');

saveButton.addEventListener('click', function () {
    if (topTextInput.value == '' && botTextInput.value == '') {
        alert('Both text fields cannot be empty, please fill out at least one form.');
    } else {
        (0, _saveCaption2.default)(topTextInput.value, botTextInput.value);
        alert('You have saved ' + topTextInput.value + ' & ' + botTextInput.value + ' to the database');
    }
});

// download meme
button.addEventListener('click', function () {
    // for Internet Explorer
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    } else {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();

        var imageName = prompt("Enter Image Name", "canvas-image");
        if (imageName != null) {
            a.download = imageName + '.png';
        } else {
            a.download = "canvas-image.png";
        }

        a.click();
        document.body.removeChild();
    }
});
//# sourceMappingURL=create-meme.js.map