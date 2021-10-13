//Styled components
import{
  ContainerLogin
} from './style'
import{
  CabecalhoLogin,
  LockContainer
} from './cabecalhoform/style'
import{
  Bodyform
} from './bodyform/style'
import{
  Field
} from './inputs/style'
//componentes diretos
import Botao from '../buttons'


function Formlogin() {
  return (
    <ContainerLogin>
        <CabecalhoLogin>
            <LockContainer>
                
            </LockContainer>
        </CabecalhoLogin>
        <Bodyform>
            <Field placeholder="User"/>
            <Field placeholder="Password"/>
            <Botao/>
        </Bodyform>
    </ContainerLogin>
  );
}

export default Formlogin;
