
$(document).ready(function () {
  // const musicSequence = [0, 2,2,2, 4, 7, 5, 4, 3, 1, 6, 8, 5, 4,5,4,5,4, 2, 0,3,3,3,3,3,3,3,6];

  const musicSequence =  [
    3,6,3,6,3,6,4,4,4,4,6,1,1,1,1,6,5,5,5,5,5,6,6,6,7
  ];
  //to play complete sequence
  function playMusic() {
    console.log("playing sequence")
    let index = 0;

    function playNextSound() {
      if (index < musicSequence.length) {
        const key = musicSequence[index];
        makeSound(key);
        index++;
        setTimeout(playNextSound,100); // Adjust the timing between sounds (in milliseconds)
      }
    }

    // Start playing the music sequence
    playNextSound();
  }

  $(".drumbtn").click(function () {
    makeSound($(this).index());
  });

  $("area").click(function () {
    console.log($(this).attr("coords"));
    makeSound($(this).index());
  });

  $(document).keydown(function (event) {
    if (isNaN(event.key)) {
      makeSound(tonum(event.key));
    } else {
      makeSound(event.key);
    }
  });

  function stickanimation(key) {
    const act = ["neutral", "sticktofloor", "sticktosnare", "sticktoride", "sticktolow", "sticktohigh", "sticktohithat", "sticktocrash", "neutral"];
    $("#stick-container").html(`<img src="images/drum-sticks.png" alt="drum stick" class="drumstick" id="${act[key]}">`);
  }

  function makeSound(key) {
    if (key >= 0 && key <= 9) {
      if(key==9){
        playMusic();
      }
      
      stickanimation(key);
      const sound = [
        "sounds/kick-bass.mp3",
        "sounds/tom-4.mp3",
        "sounds/tom-3.mp3",
        "sounds/Ride-Cymbal.mp3",
        "sounds/tom-2.mp3",
        "sounds/tom-1.mp3",
        "sounds/Hi-Hat-Open.mp3",
        "sounds/crash.mp3",
        "sounds/snare.mp3"
      ];
      var temp = new Audio(sound[key]);
      temp.play();
    }
    else {
      console.log("No sound associated")
    }
  }

  function tonum(key) {
    const keysd = ["w", "a", "s", "d", "f", "j", "k", "l"];
    return keysd.indexOf(key);
  }
  var flag=1;
  $(".TipDiv").toggleClass("Hidetips")
  $("#ShortcutBtn").click(()=>{
   $(".TipDiv").toggleClass("Hidetips")
   if(flag==0){ $("#ShortcutBtn").text("Show Shortcuts");
   flag++}
   else{
     $("#ShortcutBtn").text("Hide Shortcuts");
     flag=0;
   }
  })
});

// const drumbtn = document.querySelectorAll("button");

// drumbtn.forEach((db, i) => {
//   db.addEventListener("click", () => {
//    makeSound(i);
//   });
// });


// document.querySelectorAll("area").forEach((are, i) => {
//   are.addEventListener("click", () => {
//     console.log(are.getAttribute("coords"))
//     makeSound(i);
//   },false);
// });

// document.addEventListener("keydown", (event) => {
//   if(isNaN(event.key)){
//   makeSound(tonum(event.key))
//   }
//   else{
//   makeSound(event.key)
//   }
// });

// function stickanimation(key){
//   const act=["neutral","sticktofloor","sticktosnare","sticktoride","sticktolow","sticktohigh","sticktohithat","sticktocrash","neutral"]
//   document.getElementById("stick-container")
//   .innerHTML = `<img src="images/drum-sticks.png" alt="drum stick" class="drumstick" id="`+act[key]+`">`;
// }
// function makeSound(key) {
//   stickanimation(key);
//   const sound = [
//     "sounds/kick-bass.mp3",
//     "sounds/tom-4.mp3",
//     "sounds/tom-3.mp3",
//     "sounds/Ride-Cymbal.mp3",
//     "sounds/tom-2.mp3",
//     "sounds/tom-1.mp3",
//     "sounds/Hi-Hat-Open.mp3",
//     "sounds/crash.mp3",
//     "sounds/snare.mp3",
//   ];
//   var temp = new Audio(sound[key]);
//   temp.play();
// }

// function tonum(key) {
//   const keysd = ["w", "a", "s", "d", "f", "j", "k", "l"];
//   for (let i = 0; i < keysd.length; i++) {
//     if (keysd[i] === key) {
//       return i;
//     }
//   }
// }