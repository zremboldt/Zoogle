// Footer animate on
const app = Array.from(document.querySelectorAll(".app"));

app.forEach((app, i) => {
  const setActive = () => app.classList.add("active");
  const runSequence = () => setTimeout(setActive, 40 * i);
  setTimeout(runSequence, 500);
});

// Logo color mixup on keyup
const input = document.querySelector(".searchInput");
const letters = Array.from(document.querySelectorAll(".letter"));

const colorize = () => {
  letters.forEach(letter => {
    // class list includes red ? change to blue
    // class list includes blue ? change to green
    // class list includes green ? change to yellow
    // class list includes yellow ? change to red
  });
};

input.addEventListener("keyup", () => console.log("keyupped"));
console.log(letters);
