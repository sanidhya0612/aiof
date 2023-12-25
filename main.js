Status="";
x="";

function preload()
{

}

function setup()
{
    canvas = createCanvas(500,330);
    canvas.center();
}

function draw()
{
    image(0,0,500,330);
}

function start()
{
    objectDetector = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById("status_object").innerHTML = "Status: Detecting Objects";
    document.getElementById("inp").innerHTML = x;
}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
}