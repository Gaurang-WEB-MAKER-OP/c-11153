noseX = 0;
noseY = 0;

function preload() {
    clown_nose = lodImage("'https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    veido = createCapture(VEDIO);
    VEDIO.SIZE(300, 300);
    VEDIO.HIDE();

    poseNET = ml5.poseNET(video, modelLoded);
    poseNet.on('poseNet is intialized')
}

function gotPoses(results) {
    if (results.lenght > 0) {
        console.log('posnet is initialized')
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
    }
}

function draw() {
    image(vedio, 0, 0, 300, 300)
    image(clown_nose, noseX, noseY, 30, 30)
}

function take_snapshot() {
    SVGAElement('myFilterImage.png')
}