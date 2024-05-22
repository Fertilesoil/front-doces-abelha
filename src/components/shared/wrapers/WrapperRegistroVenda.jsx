import { childrenPropType } from '../../../PropTypes/PropTypeValidation'

const WrapperRegistroVenda = ({ children }) => {

  return (
    <section className="flex justify-center items-center h-[80vh]">
      {children}
    </section>
  )
}

WrapperRegistroVenda.propTypes = childrenPropType;

export default WrapperRegistroVenda