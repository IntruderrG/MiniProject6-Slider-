const box = document.getElementsByClassName("box");
const Arraybox = Array.from(box);

function slider(event) {
  const functionalBox = event.target; //contains the target div
  functionalBox.classList.add("grow"); //add the grow class to the clicked box
}

//without converting the boxes data into an array for each willl not work as forEach is only for arrays
Arraybox.forEach((inp) => {
  inp.addEventListener("mouseover", slider);
  inp.addEventListener("mouseout", removeSlider);
});

//Removes the flex increasing property
function removeSlider() {
  Arraybox.forEach((inp) => {
    inp.classList.remove("grow");
  });
}
