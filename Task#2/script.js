const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    display.value = "0";
  } else if (clickedButtonValue === "+-") {
    display.value *= -1;
  } else if (clickedButtonValue === "%") {
    display.value /= 100;
  } else {
    if (display.value === "0") {
      display.value = "";
      display.value += clickedButtonValue;
    } else {
      display.value += clickedButtonValue;
    }
  }
}
