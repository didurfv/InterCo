// BURGER-MENU
const hamburger = document.getElementById('hamburger');
const mobile_menu = document.querySelector('.header .container-head .nav-list ul');
const menu_item = document.querySelectorAll('.header .container-head .nav-list ul li a');
const header = document.querySelector('.header .container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//  POP UP
// Variables
var modal = document.getElementById("mainModal"); // - для самой страницы формы
var openBtn = document.getElementById("formShow"); // - для кнопки1 под форму
var openBtn2 = document.getElementById("formShow2"); // - для кнопки2 под форму
var closeBtn = document.getElementById("closeForm"); // - для кнопки (X)
var successModal = document.getElementById("successModal"); // - для формы2, что появляется после отправки данных

// When clicks the button1 - open the Form
openBtn.onclick = function () {
  modal.style.display = "block";
}
// When clicks the button2 - open the Form
openBtn2.onclick = function () {
  modal.style.display = "block";
}
// When clicks on (x) - close фтв clear the Form
closeBtn.onclick = function () {
  modal.style.display = "none";
  clearFormFields();
}
//Cleaning the Form
function clearFormFields() {
  const modalFields = modal.querySelectorAll(`input`);
  const textFields = modal.querySelectorAll(`textarea`);

  modalFields.forEach((field) => {
    field.value = "";
  });
  textFields.forEach((field) => {
    field.value = "";
  });
}


// ОТПРАВКА ДАННЫХ
// реализована непосредственно на сайте
