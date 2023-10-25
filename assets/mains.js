const changeBackgroundColor = () => {
  document.body.style.backgroundColor =
    document.getElementById("colorpicker").value;
};

document
  .getElementById("changecolorbutton")
  .addEventListener("click", changeBackgroundColor);
