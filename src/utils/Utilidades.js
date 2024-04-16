

export const injetarImagem = (elemento, caminho) => {
  const target = document.querySelector(elemento);
  target.style.backgroundImage = `url(${caminho})`;
}
