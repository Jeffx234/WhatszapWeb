import { Form } from './styles'
import { Container, Content } from './styles'

export function TelaLogin()  {
  return (
    <Container>
      <Content>
        <Form>
          <h1> Faça seu login </h1>
            <div>
              <label> Login </label>
              <input type="email" placeholder="exemple@hotmail.com" />
            </div>
            <div>
              <label> Senha </label>
              <input 
                type="password"
                placeholder=""
              /> 
            </div>
            <div className="github">
              <a href="#">
                Github
              </a>
            </div>
        </Form>
      </Content>
    </Container>
  )
}