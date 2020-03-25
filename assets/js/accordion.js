// Make accordion collapsable
document.addEventListener("DOMContentLoaded", e => {
  const radios = document.querySelectorAll(".accordion [type='radio']");

  for (let radio of radios) {
    radio.addEventListener("mousedown", e => {
      e.preventDefault();
    });
    radio.addEventListener("click", e => {
      //this.checked = !this.checked;
    });
  }
});
