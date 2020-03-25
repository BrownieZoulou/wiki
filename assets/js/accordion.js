// Make accordion collapsable
document.addEventListener("DOMContentLoaded", e => {

  const radios = document.querySelectorAll(".accordion [type='radio']");

  radios.forEach((radio) => {
    radio.addEventListener("click", function(evt) {
      let previousValue = evt.target.dataset.previous;
      let name = evt.target.name

      // First unselect any other selected radio
      document.querySelectorAll(`input[name=${name}]`).forEach(input => {
        if (input.name == name)
          return;
        if (input.checked) {
          input.dataset.previous = "unchecked";
          input.checked = false;
        }
      });

      if (previousValue == 'checked') {
        evt.target.checked = false;
        evt.target.dataset.previous = "unchecked";
      } else {
        evt.target.dataset.previous = "checked";
      }

    });
  });


});
