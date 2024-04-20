import { gridLoaderPropType } from "../../PropTypes/PropTypeValidation";
import { spiral } from "ldrs"
spiral.register("l-spiral");

const SpiralLoader = ({tamanho, cor, velocidade}) => {
  return (
    <l-spiral
      size={tamanho}
      color={cor}
      speed={velocidade}
    />
  )
}

SpiralLoader.propTypes = gridLoaderPropType;

export default SpiralLoader