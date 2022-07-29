"use strict";

const cats = [
  {
    kitty: "Dreamy",
    job: "sleep",
    img: "/cat-pics/dreamer-cat.jpg",
    text: "Sniff other cat's butt and hang jaw half open thereafter leave fur on owners clothes yet lick human with sandpaper tongue. Bite the neighbor's bratty kid catch eat throw up catch eat throw up bad birds sleep all day whilst slave is at work, play all night whilst slave is sleeping yet with tail in the air",
  },
  {
    kitty: "Sweety",
    job: "purr",
    img: "/cat-pics/sweet-cat.jpg",
    text: "Murr i hate humans they are so annoying kitty but hit you unexpectedly so purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table get my claw stuck in the dog's ear destroy house in 5 seconds. Sit in window and stare oooh, a bird, yum crash against wall but walk away like nothing happened annoy the old grumpy cat, ",
  },
  {
    kitty: "Grumpy",
    job: "meow",
    img: "/cat-pics/grumpy-cat.jpg",
    text: "I like frogs and 0 gravity and step on your keyboard while you're gaming and then turn in a circle . Pretend you want to go out but then don't spread kitty litter all over house so cat playing a fiddle in hey diddle diddle? but swipe at owner's legs for time to go zooooom loves cheeseburgers, and fight an alligator and win.",
  },
  {
    kitty: "King",
    job: "rule",
    img: "/cat-pics/king-cat.jpg",
    text: "My cat stared at me he was sipping his tea, too paw your face to wake you up in the morning. Hiiiiiiiiii feed me now scoot butt on the rug steal the warm chair right after you get up. Pushes butt to face has closed eyes but still sees you. Love to play with owner's hair tie sitting in a box but stare at the wall, play with food and get confused by dust.",
  },
];

const photo = document.querySelector(".photo");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
// const prev = document.querySelector(".prev-btn");
// const next = document.querySelector(".next-btn");
// const random = document.querySelector(".btn");

const btns = document.querySelectorAll(".btn");
console.log(btns);

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = cats[currentItem];
  photo.src = item.img;
  name.textContent = item.kitty;
  job.textContent = item.job;
  text.textContent = item.text;
});

function showCat(kitty) {
  const item = cats[kitty];
  photo.src = item.img;
  name.textContent = item.kitty;
  job.textContent = item.job;
  text.textContent = item.text;
}
function randomCat() {
  return Math.floor(Math.random() * cats.length);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("next-btn")) {
      currentItem++;
      if (currentItem > 3) {
        currentItem = 0;
      }
    } else if (e.currentTarget.classList.contains("prev-btn")) {
      currentItem--;
      if (currentItem < 0) {
        currentItem = cats.length - 1;
      }
    } else {
      currentItem = randomCat();
    }
    showCat(currentItem);
  });
});
