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
        </Bodyform>
    </ContainerLogin>
  );
}

export default Formlogin;
