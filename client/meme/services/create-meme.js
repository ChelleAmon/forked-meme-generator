import saveCaption from "../../caption/services/save-caption.js"

    let memeFile = document.getElementById('uploadMeme')
    let topTextInput = document.getElementById('topText')
    let botTextInput = document.getElementById('botText')
    const canvas = document.getElementById('Canvas')
    const button = document.getElementById('btn')


    const maxHeight = 400;
    const maxWidth = 800;
    let imgValue;

    let image;
    let imageDataURL;


    topTextInput.addEventListener("change", () => {
        updateMemeCanvas();
      });
      
    botTextInput.addEventListener("change", () => {
        updateMemeCanvas();
      });

    memeFile.addEventListener('change', () => {
        imageDataURL = URL.createObjectURL(memeFile.files[0])
        image = new Image();
        image.src = imageDataURL;

        image.addEventListener("load", () => {
            if(canvas.getContext('2d')) {
                updateMemeCanvas()
            } 
            else {
                alert('Your browser does not support this image format');
            }

        }, {once: true});
    })

    export function updateMemeCanvas() {

        if(!image) return;
        
            const ctx = canvas.getContext('2d');
            ctx.beginPath();

            // establish image size
            const width = image.width;
            const height = image.height;
            const yOffSet = maxHeight / 7;
            let w;
            let h;

            // Resize image within max bounds
            if (width > maxWidth) {
                imgValue = width / maxWidth;
                w = width/imgValue;
                h = height/imgValue;
            }
            else if (height > maxHeight){
                imgValue = height / maxHeight;
                w = width/imgValue;
                h = height/imgValue;
            }
            else{
                w = width;
                h = height;
            }


            // load the canvas background
            canvas.width = w;
            canvas.height = h;

            console.log(canvas.width);
            ctx.drawImage(image, 0, 0, w, h);

            // styling the meme text
            ctx.font = 'Bold 40px Sans-serif';
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'black';

            // adding the top meme text
            ctx.textBaseline = 'Top';
            ctx.textAlign = 'center';
            ctx.fillText(topText, w/2, yOffSet);
            ctx.strokeText(topText, w/2, yOffSet);

            // adding the bottom text
            ctx.textBaseline = 'Bottom';
            ctx.fillText(botText, w/2, h - yOffSet);
            ctx.strokeText(botText, w/2, h - yOffSet);
        
    }

    const saveButton = document.getElementById('saving');


    saveButton.addEventListener('click', () => {
        if (topTextInput.value == '' && botTextInput.value == ''){
        alert('Both text fields cannot be empty, please fill out at least one form.');
    }
        else {
        saveCaption(topTextInput.value, botTextInput.value)
        alert('You have saved ' + topTextInput.value + ' & ' + botTextInput.value + ' to the database');

    }
})

// download meme
button.addEventListener('click', function() {
    // for Internet Explorer
    if(window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png")
    }
    else {
            const a =  document.createElement("a");
            document.body.appendChild(a);
            a.href = canvas.toDataURL();

            const imageName = prompt("Enter Image Name", "canvas-image");
            if(imageName != null) {
                a.download = `${imageName}.png`;
            }
            else {
                a.download = "canvas-image.png";
            }

            a.click();
            document.body.removeChild(); 
    }
})

