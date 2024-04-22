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