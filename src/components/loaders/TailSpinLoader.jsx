import { tailspin } from "ldrs"
import { gridLoaderPropType } from "../../PropTypes/PropTypeValidation";
tailspin.register("l-tailspin");

export const TailSpinLoader = ({cor, tamanho, velocidade}) => {
  return (
    <l-tailspin
      color={cor}
      size={tamanho}
      speed={velocidade}
    />
  )
}

TailSpinLoader.propTypes = gridLoaderPropType;