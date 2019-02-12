// Footer animate on
const app = Array.from(document.querySelectorAll(".app"));

app.forEach((app, i) => {
  const setActive = () => app.classList.add("active");
  const runSequence = () => setTimeout(setActive, 40 * i);
  setTimeout(runSequence, 500);
});

// Logo color mixup on keydown
const input = document.querySelector(".searchInput");
const letters = Array.from(document.querySelectorAll(".letter"));

const cycleColor = () => {
  letters.forEach(letter => {
    if (letter.classList.contains("red")) {
      letter.classList.remove("red");
      letter.classList.add("blue");
    } else if (letter.classList.contains("blue")) {
      letter.classList.remove("blue");
      letter.classList.add("green");
    } else if (letter.classList.contains("green")) {
      letter.classList.remove("green");
      letter.classList.add("yellow");
    } else {
      letter.classList.remove("yellow");
      letter.classList.add("red");
    }
  });
};

input.addEventListener("keydown", () => cycleColor());
