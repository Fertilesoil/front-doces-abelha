import FormsWraper from "../components/formularios/FormsWraper";
import FormularioLogin from "../components/formularios/FormularioLogin";

const Login = () => {

  return (
    <FormsWraper
      borderLeft="rounded-l-lg"
      borderRight="rounded-r-lg"
    >
      <FormularioLogin />
    </FormsWraper>
  )
}

export default Login