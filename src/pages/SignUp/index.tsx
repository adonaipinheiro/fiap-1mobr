import { Link } from "react-router-dom";
import { Button, Input, Separator } from "../../components";
import { Container, Content } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Content>
        <h1>FIAP</h1>
        <h3>Educação que transforma!</h3>
        <Separator size={16} />
        <Input type="text" placeholder="Digite seu nome" />
        <Separator size={16} />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
        />
        <Separator size={16} />
        <Input
          type="password"
          placeholder="Digite sua senha"
        />
        <Separator size={16} />
        <Input
          type="password"
          placeholder="Confirme sua senha"
        />
        <Separator size={16} />
        <Button text="Cadastrar" />
        <Separator size={16} />
        <Link to={"/signIn"}>
          Já possui cadastro? <u>Clique aqui</u>
        </Link>
      </Content>
    </Container>
  );
}
