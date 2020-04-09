let mobilenet;
let video;
let label = '';
let confidence = '';
let resultsP;

function preload() {
    
    video = createCapture(VIDEO);
    video.hide();

}

function setup() {
    noCanvas();
    video = createCapture(VIDEO);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
    resultsP = createP('Loading model and video...');
}


function modelReady() {
    console.log("Model is Ready!!");
    classifyVideo();
}

function classifyVideo() {
    mobilenet.classify(gotResults);
}

function gotResults(err, result) {
    if (err) {
        console.error("Error!");
    } else {
        label = result[0].label;
        confidence = result[0].confidence * 100;
        resultsP.html('Label: ' + label + ' ' + 'Confidence: ' + nf(confidence, 2, 2) + '%');
        classifyVideo();
    }
}



function draw() {
    image(video, 0, 0, width, height);
    document.get
}
