const drumbtn = document.querySelectorAll("button");

drumbtn.forEach((db, i) => {
  db.addEventListener("click", () => {
    makeSound(i);
  });
});

document.querySelectorAll("area").forEach((are, i) => {
  are.addEventListener("click", () => {
    makeSound(i);
  },true);
});

document.addEventListener("keydown", (event) => {
   makeSound(event.key);
});
document.addEventListener("keydown", (event) => {
  makeSound(tonum(event.key));
});

function stickanimation(){
  document.getElementById(
    "stick-container"
  ).innerHTML = `<img src="images/drum-sticks.png" alt="drum stick" id="sticktoride" >`;

}
function makeSound(key) {
  stickanimation();
  const sound = [
    "sounds/kick-bass.mp3",
    "sounds/tom-4.mp3",
    "sounds/tom-3.mp3",
    "sounds/Ride-Cymbal.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-1.mp3",
    "sounds/Hi-Hat-Open.mp3",
    "sounds/crash.mp3",
    "sounds/snare.mp3",
  ];
  var temp = new Audio(sound[key]);
  temp.play();
}

function tonum(key) {
  const keysd = ["w", "a", "s", "d", "f", "j", "k", "l"];
  for (let i = 0; i < keysd.length; i++) {
    if (keysd[i] === key) {
      return i;
    }
  }
}
