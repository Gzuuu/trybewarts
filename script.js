const form = document.getElementById('btnEntrar');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const check = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');

//  Função entrar
function entrar() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

form.addEventListener('click', entrar);

//  Função enable
function enable() {
  if (submit.disabled === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

check.addEventListener('click', enable);
