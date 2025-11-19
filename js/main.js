document.addEventListener('DOMContentLoaded', () => {
    const vectorElements = document.querySelector('.vector');
    const projectsSection = document.getElementById('projects');

    if (vectorElements && projectsSection) {
        vectorElements.addEventListener('click', () => {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});


/*const linkProjetoRefund = document.getElementById('projeto-refund');
linkProjetoRefund.addEventListener('click', function(e) {
    e.preventDefault(); 
    alert('Projeto em desenvolvimento. Em breve estará disponível!');
});*/

const linkProjetoRefund = document.getElementById('projeto-refund');

linkProjetoRefund.addEventListener('click', function(e) {
    e.preventDefault(); 
    
    // **Substituição do alert() pelo Swal.fire()**
    Swal.fire({
      icon: 'warning', // Define o ícone de aviso
      title: 'Em Desenvolvimento',
      text: 'Este projeto ainda não está disponível. Volte em breve!',
      confirmButtonText: 'Entendi', // Texto do botão
      customClass: { // Adiciona classes para estilização CSS customizada (opcional)
        popup: 'meu-modal-dark',
        confirmButton: 'meu-botao-azul'
      }
    });
});