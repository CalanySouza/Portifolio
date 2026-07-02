const btn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const texto = "Desenvolvedor em Formação";
const elemento = document.getElementById('typewriter');
let i = 0;

function digitar() {
  if (i < texto.length) {
    elemento.textContent += texto[i];
    i++;
    setTimeout(digitar, 100);
  }
}
digitar();