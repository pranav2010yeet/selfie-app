var SpeechRecognition = window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
  
console.log("hi")

    document.getElementById("textbox").innerHTML="";
    recognition.start()

}
recognition.onresult=function run(event){

console.log(event)
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content)
speak()

}

function speak(){
    var synth=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    var saythis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(saythis)
    Webcam.attach( '#camera' );
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  