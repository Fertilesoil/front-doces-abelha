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