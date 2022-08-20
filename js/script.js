const trans_btn = document.querySelector(".trans-btn");
const form = document.querySelector(".form");
const form_controls = document.querySelectorAll(".form-control");

trans_btn.querySelector("button").onclick = () => {
  trans_btn.classList.toggle('active');
  form.classList.toggle('active');
}

form_controls.forEach(form_control => {
  form_control.onfocus = () => {
    form_control.parentElement.querySelector(".trans").classList.add("active");
  }
  form_control.onblur = () => {
    if (form_control.value == "") {
      form_control.parentElement.querySelector(".trans").classList.remove("active");
    }
  }
})