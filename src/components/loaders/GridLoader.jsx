import { grid } from "ldrs"
import { gridLoaderPropType } from "../../PropTypes/PropTypeValidation";
grid.register("l-grid");

const GridLoader = ({tamanho, cor, velocidade}) => {
  return (
    <l-grid
      size={tamanho}
      color={cor}
      speed={velocidade}
    />
  )
}

GridLoader.propTypes = gridLoaderPropType;

export default GridLoader