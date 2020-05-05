const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}
// day 1
const buttonAuth = document.querySelector('.button-auth');
const modaLAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');


//добавляет класс
// modaLAuth.classList.add('hello'); 
//проверяет есь такой класс или нет класс - булевное значение
// console.log(modaLAuth.classList.contains('modal-auth'));
//удаляет класс
// modaLAuth.classList.remove('modal-auth'); 
//удаляет класс если он есть и добавляет если его нет 
// modaLAuth.classList.toggle('modal-auth'); 

function toggleModalAuth() {
  modaLAuth.classList.toggle('is-open');
}

// авторизация
function authorized() {
  // функция при выходе из авторизации
  function logOut() {
    login = null;  
    localStorage.removeItem('gloDelivery');  
    buttonAuth.style.display= '';
    userName.style.display= '';
    buttonOut.style.display= '';
    buttonOut.removeEventListener('click', logOut);

    checkAuth();
  }
  
  console.log("Авторизован");
  
  userName.textContent = login;
  buttonAuth.style.display= 'none';
  userName.style.display= 'inline';
  buttonOut.style.display= 'block';
  buttonOut.addEventListener('click', logOut);


}


function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event){
    event.preventDefault();
    login = loginInput.value;
    localStorage.setItem('gloDelivery', login);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset(); // очищает поля ввода
    checkAuth(); 
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkAuth(){
  if (login) {
    authorized();
  }  
    else {
      notAuthorized();
    }  
}
checkAuth();

