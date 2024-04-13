import FormsWraper from "../components/formularios/FormsWraper";
import FormularioCadastro from "../components/formularios/FormularioCadastro";

const Cadastro = () => {
  return (
    <FormsWraper
      flex="flex-row-reverse"
      borderLeft="rounded-r-lg"
      borderRight="rounded-l-lg"
    >
      <FormularioCadastro />
    </FormsWraper>
  );
}

export default Cadastro;