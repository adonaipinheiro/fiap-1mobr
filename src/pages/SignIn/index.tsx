import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Separator } from "../../components";
import { Container, Content } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/home");
  }

  return (
    <Container>
      <Content>
        <h1>FIAP</h1>
        <h3>Educação que transforma!</h3>
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
        <Button onClick={handleSignIn} text="Entrar" />
        <Separator size={16} />
        <Link to={"/signUp"}>
          Não possui cadastro? <u>Clique aqui</u>
        </Link>
      </Content>
    </Container>
  );
}
