// Footer animate on
const app = Array.from(document.querySelectorAll(".app"));

app.forEach((app, i) => {
  const setActive = () => app.classList.add("active");
  const runSequence = () => setTimeout(setActive, 40 * i);
  setTimeout(runSequence, 500);
});

// Logo color mixup on keyup
const input = document.querySelector(".searchInput");

input.addEventListener("keyup", () => console.log("keyupped"));
