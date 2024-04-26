import PropTypes from "prop-types";

export const formsWraperPropType = {
  children: PropTypes.node,
  flex: PropTypes.string,
  borderLeft: PropTypes.string,
  borderRight: PropTypes.string
}

export const childrenPropType = {
  children: PropTypes.node
}

export const childrenCollectionPropType = {
  children: PropTypes.array
}

export const navbarPropType = {
  icone: PropTypes.object,
  texto: PropTypes.string,
  ativo: PropTypes.bool
}

export const perfilPropType = {
  props: PropTypes.bool
}

export const cardRecheioPropType = {
  id: PropTypes.string,
  nome: PropTypes.string,
  caminho: PropTypes.string
}

export const gridLoaderPropType = {
  tamanho: PropTypes.number,
  cor: PropTypes.string,
  velocidade: PropTypes.number
}

export const produtoVendaPropType = {
  produtos: PropTypes.array
}

export const botaoLinkPropType = {
  caminho: PropTypes.string,
  loading: PropTypes.bool,
  titulo: PropTypes.string
}

export const idPropType = {
  id: PropTypes.string
}

export const recheioBotaoExcluirPropType = {
  loader: PropTypes.bool,
  funcao: PropTypes.func,
  id: PropTypes.string
}

export const recheioBotaoEditarPropType = {
  loader: PropTypes.bool,
  funcao: PropTypes.func,
  id: PropTypes.string,
  recheio: PropTypes.string
}

export const botaoFormularioPropType = {
  loader: PropTypes.bool,
  funcao: PropTypes.func,
  recheio: PropTypes.string
}

export const navHomeWrapperPropType = {
  children: PropTypes.node,
  secao: PropTypes.string,
  elemento: PropTypes.node
}

export const templateHomePropType = {
  titulo: PropTypes.string,
  produto: PropTypes.string,
  plural: PropTypes.string,
  corTexto: PropTypes.string,
  gradient: PropTypes.string
} 

export const dropDownPropType = {
  loading: PropTypes.bool,
  recheios: PropTypes.array,
  posicao: PropTypes.string,
  funcao: PropTypes.func,
  produto: PropTypes.object
}