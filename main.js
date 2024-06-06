prediction_1 ="";
prediction_2 ="";

Webcam.set({
    height:340,
    width:340,
    image_foramt:'png',
    png_quality:100
});
Webcam.attach('#cam')

function take_snap(){
    Webcam.snap(function (data_uri){
    document.getElementById("view").innerHTML = '<img id = "captured_image" src="'+data_uri+'"></img>';
    });
}
console.log("ml5 Version", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gegsp8XwE/',modelLoded)