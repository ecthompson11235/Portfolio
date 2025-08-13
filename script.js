//message in the console
console.log("    ______");
console.log("  /        |");
console.log(" | (.)--(.) |");
console.log("  |   ___/ /");
console.log("   -------");
console.log("it's a smiley face! with glasses!");
console.log("on second thought...I could have just done this v");
console.log("                                                :)");
console.log("I hope this makes you smile");

//homepage dropdowns
function revealG() {     
  document.getElementById("dropdownG").classList.toggle("show");
}

function revealS() {     
  document.getElementById("dropdownS").classList.toggle("show");
}

function revealI() {     
  document.getElementById("dropdownI").classList.toggle("show");
}

//pause animations
function pause() {
  const h2Elements = document.getElementsByTagName("h2");

  for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.animationPlayState = "paused";
  }
}

function play() {
  const h2Elements = document.getElementsByTagName("h2");

  for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.animationPlayState = "running";
  }
}