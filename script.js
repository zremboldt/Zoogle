let app = Array.from(document.querySelectorAll(".app"));

// Animation
app.forEach((app, i) => {
  const setActive = () => app.classList.add("active");
  const runSequence = () => setTimeout(setActive, 40 * i);
  setTimeout(runSequence, 500);
});
