function change(){
   var toggle = document.getElementById("toggle");
   var bulb = document.getElementById("bulb");
   var wrapper = document.getElementById("wrapper");
   var text = document.getElementById("text");
   
   if(toggle.checked){
       bulb.src= "glow.png"
       wrapper.style.backgroundColor= "rgba(0, 0, 0, 0.180)";
       text.innerHTML = "TURN OFF";
   }
   else{
       bulb.src="notglow.png";
       wrapper.style.backgroundColor= "rgba(0, 0, 0, 0.767)";
       text.innerHTML = "TURN ON";
   }
}