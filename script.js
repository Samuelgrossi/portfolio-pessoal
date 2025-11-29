// Alterar a cor do tema
function toggleTheme() {
    document.body.classList.toggle('white');
}

// Validacao do formulario de contato
function validarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Checar campos vazios
  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verificacao se o email contem o formato correto
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regexEmail.test(email)) {
    alert('Digite um e-mail válido (ex: nome@dominio.com)');
    return;
  }

  // Se tudo estiver correto vai aparecer esta mensagem
  alert(`Obrigado ${nome}!  Sua mensagem foi enviada com sucesso!`);
  document.getElementById('form-contato').reset();
}


