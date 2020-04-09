let mobilenet;
let img;

function preload() {
    mobilenet = ml5.imageClassifier('MobileNet', modelReady());
    img = loadImage('../images/penguin.jpg');

}
function modelReady() {
    console.log("Model is Ready!!");
    
}

function setup() {
    createCanvas(600, 600);
    mobilenet.classify(img, (err, result) => {
        if (err) {
            console.error("Error!");
        } else {
            console.log(result);
            let label = result[0].label;
            let confidence = result[0].confidence * 100;
            createDiv('Label: ' + label);
            createDiv('Confidence: ' + nf(confidence, 2, 2) + '%');
        }
    });

    image(img, 0, 0, width, height);
}
