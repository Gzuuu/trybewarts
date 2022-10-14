const form = document.getElementById('btnEntrar');
const email = document.getElementById('email');
const senha = document.getElementById('password');

//  Função entrar
function entrar() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

form.addEventListener('click', entrar);
