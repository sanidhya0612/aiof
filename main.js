Status="";
x="";
objects=[];
var synth = window.speechSynthesis;

function preload()
{

}

function setup()
{
    canvas = createCanvas(500,330);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,330);
    video.hide();
}

function draw()
{
    image(video,0,0,500,330);
    if(Status != "")
    {
        objectDetector.detect(gotResult);
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status_object").innerHTML = "Status: Object Found";
            percentage = floor(objects[i].confidence * 100);
            fill("#FF0000");
            text(objects[i].label + " " + percentage + " %", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects[i].label == x)
            {
                video.stop();
                document.getElementById("status_object").innerHTML =  x + " Found";

                var utterThis = new SpeechSynthesisUtterance("Object Mentioned Found");
                window.speechSynthesis.speak(utterThis);
    }
    else{
        document.getElementById("status_object").innerHTML =  x + " Not Found";
    }
            
        }
    }
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_object").innerHTML = "Status: Detecting Objects";
    x = document.getElementById("inp").value;
    
}

function modelLoaded()
{
    console.log("Model Loaded");
    Status = true;
}

function gotResult(results)
{
    if(error)
    {
        console.log(error);
    }
    else{
    console.log(results)
    objects=results;
    }
}