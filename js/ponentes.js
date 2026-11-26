(function () {
  const listas = document.querySelectorAll('#ponentes .speakers');
  if (listas.length !== 2) return;

  const [visibles, resto] = listas;
  const cupo = visibles.children.length;
  const fichas = [...visibles.children, ...resto.children];

  for (let i = fichas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fichas[i], fichas[j]] = [fichas[j], fichas[i]];
  }

  visibles.replaceChildren(...fichas.slice(0, cupo));
  resto.replaceChildren(...fichas.slice(cupo));
})();
