


function admin() {
 let user = document.querySelector('#username').value;
 let password = document.querySelector('#password').value;
 let error = document.querySelector('#error');

 if(user === "admin" && password === "123"){
  location.href = 'page2.html';
 } else {
  error.innerHTML = 'Login ou senha incorretos'

  setTimeout(function(){
    document.querySelector('#error').innerText = ""
  }, 3000)
 }
}