'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.captionRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _captionSchema = require('../schemas/caption.schema.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var captionRouter = exports.captionRouter = _express2.default.Router();

captionRouter.get('/captions', function (req, res) {
    _captionSchema.CaptionModel.find().then(function (data) {
        res.json(data);
    }).catch(function (err) {
        return res.status(500).json(err);
    });
});

captionRouter.post('/create-caption', function (req, res) {
    var _req$body = req.body,
        topText = _req$body.topText,
        bottomText = _req$body.bottomText;

    var new_caption = new _captionSchema.CaptionModel({
        topText: topText,
        bottomText: bottomText
    });
    new_caption.save().then(function (data) {
        return res.json(data);
    }).catch(function (err) {
        return res.status(500).json(err);
    });
});

captionRouter.put('/edit-caption/:id', function (req, res) {
    var _id = req.params.id;
    var _req$body2 = req.body,
        topText = _req$body2.topText,
        bottomText = _req$body2.bottomText;


    _captionSchema.CaptionModel.findOneAndUpdate({ _id: _id }, { $set: { topText: topText, bottomText: bottomText } }, { new: true }).then(function (data) {
        return res.json(data);
    }).catch(function (err) {
        return res.status(500).json(err);
    });
});

captionRouter.delete('/delete-caption/:id', function (req, res) {
    var id = req.params.id;

    _captionSchema.CaptionModel.findOneAndRemove({ _id: id }).then(function (data) {
        return res.json(data);
    }).catch(function (err) {
        return res.status(500).json(err);
    });
});

captionRouter.get('/random-caption', function (req, res) {
    _captionSchema.CaptionModel.aggregate([{ $sample: {
            size: 1 // grabs how many documents we will get 
        } }]).then(function (data) {
        return res.json(data);
    }).catch(function (err) {
        return res.status(500).json(err);
    });
});

//Another way to get random document(caption) from db

// captionRouter.get('/random-caption', (req,res) => {
//     CaptionModel.count().exec(function(err, count){
//         let random = Math.floor(Math.random() * count);

//         CaptionModel.findOne().skip(random).exec()
//         .then(data => res.json(data))
//         .catch(err => res.status(500).json(err))
//     })
// })
//# sourceMappingURL=caption.route.js.map