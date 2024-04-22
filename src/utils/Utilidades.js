

export const injetarImagem = (elemento, caminho) => {
  const target = document.querySelector(elemento);
  target.style.backgroundImage = `url(${caminho})`;
}

export const formatarPreco = (preco) => {
  return preco.toFixed(2);
}

export const atualizarRecheioEdicao = async (e, recheios, funcao, produto) => {
  let nome = e.target.value
  let recheio = await recheios.find(recheio => recheio.nome === nome)
  funcao({
    ...produto, recheio_id: recheio.id
  })
}

export const atualizarRecheioProduto = async (e, recheios, funcao, produto) => {
  let nome = e.target.value
  let recheio = await recheios.find(recheio => recheio.nome === nome)
  funcao({ ...produto, recheio_id: recheio.id })
}