// Make accordion collapsable
document.addEventListener("DOMContentLoaded", e => {
  const radios = document.querySelectorAll(".accordion [type='radio']");

  for (let radio in radios) {
    debug.log(radio);
    radio.addEventListener("click", function(e) {
      debug.log("clicked");
      if (this.checked) {
        this.checked = false;
      }
    });
  }
});
