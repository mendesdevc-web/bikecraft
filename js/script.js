// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  k;
  const url = location.href;
  const href = link.href;
  if (url === href) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//ativar itens do orçamento

const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametro.forEach(ativarProduto);
