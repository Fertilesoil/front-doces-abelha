import { childrenPropType } from "../../../PropTypes/PropTypeValidation"


const EdicaoWrapper = ({ children }) => {
  return (
    <section className="h-[80vh] flex justify-center items-center">
      {children}
    </section>
  )
}

EdicaoWrapper.propTypes = childrenPropType;

export default EdicaoWrapper