document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('cadastro-form');
  const listaAlunos = document.getElementById('alunos-lista');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeAluno = document.getElementById('nome').value;
    if (nomeAluno) {
      const novoAluno = document.createElement('li');
      novoAluno.className = 'aluno-item';

      const nomeElement = document.createElement('span');
      nomeElement.className = 'aluno-nome';
      nomeElement.textContent = nomeAluno;

      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'x';
      botaoExcluir.addEventListener('click', function() {
        listaAlunos.removeChild(novoAluno);
      });

      novoAluno.appendChild(nomeElement);
      novoAluno.appendChild(botaoExcluir);
      listaAlunos.appendChild(novoAluno);
      form.reset();
    }
  });
});