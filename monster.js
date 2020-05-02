

function highlife(){
    window.open("https://millerhighlife.com/");
}



function partyZone(){
    document.getElementById("partyZone").innerHTML="<iframe src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24177.968287058306!2d-73.93297957966634!3d40.75661304614687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sstrip%20clubs!5e0!3m2!1sen!2sus!4v1586821235792!5m2!1sen!2sus' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>";
    document.getElementById("roger").innerHTML="Tell them, Roger said wuz up!";
    document.getElementById("song").innerHTML="<iframe width='560' height='315' src='https://www.youtube.com/embed/TaVXvtb6ddo?controls=0&amp;start=26;autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>";
    document.getElementById("song").style.display="none";
} 



function showInput() {
    console.log('showInput called...')
    var userInput = document.getElementById("userInput").value;
    var display = document.getElementById("display");
    display.innerHTML = userInput;
  }