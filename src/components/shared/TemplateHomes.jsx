import { templateHomePropType } from "../../PropTypes/PropTypeValidation"


const TemplateHomes = ({ titulo, produto, plural, corTexto, gradient }) => {

  const textBase = `${corTexto} font-[500] mt-4 text-pretty text-[1.045rem] max-sm:text-sm`;

  return (
    <section className="h-[90vh] after:bg-abelha-home after:top-0 after:left-0 after:w-[100vw] after:fixed after:h-[100vh] after:bg-center after:bg-contain after:bg-no-repeat after:opacity-20 after:z-[-20] flex items-center justify-center flex-col font-ManRope">

      <div className=" w-[52%] h-full text-center text-balance shadow-sm rounded-sm p-2 backdrop-blur-sm flex flex-col gap-5 justify-center -z-10 max-sm:w-[100%] max-lg:w-[100%]">

        <div className=" flex justify-around w-full items-center">
          <h2 className={`${gradient} bg-clip-text text-transparent text-4xl font-[600] font-SpecialElite tracking-wide max-sm:text-xl`}>
            {titulo}
          </h2>

          <h4 className="text-gray-600 text-lg text-right text-pretty font-[500] max-sm:text-sm max-sm:balance">
            Bem vindo a seção de {plural}! Aqui você vai encontrar um guia claro de como usar as funcionalidades da sua nova aplicação.
          </h4>
        </div>

        <p className={textBase}>
          O menu de operações ficará visível durante sua permanência na seção, nele você poderá realizar as operações de criação de um novo {produto}, visualizar os {plural} já salvos por você e também editá-los.
        </p>

        <p className={textBase}>
          O sistema é desenhado para que seja simples e intuitivo. Você pode cadastrar seu {produto} no primeiro botão a esquerda onde encontrará um card editável. Depois de cadastrado você será redirecionado automaticamente a tela de listagem.
        </p>

        <p className={textBase}>
          Na listagem você verá que cada card possui um botão. Esse botão te levará para a página de edição onde você poderá editar as informações do {produto} ou deletá-lo.
        </p>

        <div className="flex justify-between items-center bg-red-100 p-1 rounded-sm">
          <div className="h-14 w-2 rounded-sm bg-red-700 max-sm:h-24"></div>

          <p className="text-red-600 text-balance font-[500] text-center ms-2.5 me-2.5 font-Nunito max-sm:text-sm">
            Atenção, você só pode acessar os editáveis através do botão dentro do card de listagem, qualquer tentativa de acesso que não seja a citada fará com que você retorne para cá!
          </p>
        </div>
      </div>
    </section>
  )
}

TemplateHomes.propTypes = templateHomePropType;

export default TemplateHomes