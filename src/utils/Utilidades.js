

export const injetarImagem = (elemento, caminho) => {
  const target = document.querySelector(elemento);
  target.style.backgroundImage = `url(${caminho})`;
}

export const formatarPreco = (preco) => {
  return preco.toFixed(2);
}