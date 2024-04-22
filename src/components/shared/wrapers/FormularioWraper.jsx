import { childrenPropType } from "../../../PropTypes/PropTypeValidation"

const FormularioWraper = ({children}) => {
  return (
    <section className="flex justify-center items-center h-[80vh]">
      {children}
    </section>
  )
}

FormularioWraper.propTypes = childrenPropType;

export default FormularioWraper