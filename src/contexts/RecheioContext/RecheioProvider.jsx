import { childrenPropType } from "../../PropTypes/PropTypeValidation"
import { RecheioContext } from "./RecheioContext";


export const RecheioProvider = ({ children }) => {



  let shared = {

  }

  return (
    <RecheioContext.Provider>
      {children}
    </RecheioContext.Provider>
  )
}

RecheioProvider.propTypes = childrenPropType;