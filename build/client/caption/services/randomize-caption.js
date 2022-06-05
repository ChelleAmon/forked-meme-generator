'use strict';

var _apiService = require('../../api/api.service.js');

var _createMeme = require('../../meme/services/create-meme.js');

function randomize() {
   _apiService.apiService.get('random-caption').then(function (caption) {

      saveCaptionToStorage(caption);
      updateCaptionFromStorage();
      (0, _createMeme.updateMemeCanvas)();
   }).catch(function (err) {
      return console.log("There is an error", err);
   });
}

function saveCaptionToStorage(caption) {
   var topText = caption[0]["topText"];
   var bottomText = caption[0]["bottomText"];

   sessionStorage.setItem("topText", topText);
   sessionStorage.setItem("bottomText", bottomText);
}

function updateCaptionFromStorage() {
   var topTextInput = document.querySelector('#topText');
   var bottomTextInput = document.querySelector('#botText');

   topTextInput.value = sessionStorage.getItem("topText");
   bottomTextInput.value = sessionStorage.getItem("bottomText");
}

var randomBtn = document.querySelector('#randomBtn');

randomBtn.addEventListener('click', function () {
   randomize();
});
//# sourceMappingURL=randomize-caption.js.map