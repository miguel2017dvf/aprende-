
let categoriaAtual = "Todos";

function filtrar(categoria) {
  categoriaAtual = categoria;
  atualizar();
}

function pesquisar() {
  atualizar();
}

function atualizar() {
  const busca = document
    .getElementById("pesquisa")
    .value.toLowerCase()
    .trim();

  const cards = document.querySelectorAll(".card");
  let encontrados = 0;

  cards.forEach(card => {
    const categoria = card.dataset.categoria;
    const texto = card.innerText.toLowerCase();

    const combinaCategoria =
      categoriaAtual === "Todos" ||
      categoria === categoriaAtual;

    const combinaBusca = texto.includes(busca);

    const mostrar = combinaCategoria && combinaBusca;

    card.hidden = !mostrar;

    if (mostrar) encontrados++;
  });

  document.getElementById("mensagem").textContent =
    encontrados === 0
      ? "Nenhum tutorial encontrado."
      : encontrados + " tutorial(is) encontrado(s).";
}

document
  .getElementById("pesquisa")
  .addEventListener("input", atualizar);
