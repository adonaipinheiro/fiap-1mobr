// Hooks
import { Input } from "../../components";
import useHome from "./hooks/useHome";

// Styles
import { Container, Content } from "./styles";

function Home() {
  const {
    input,
    handleInputChange,
    goToUserInfo,
    handleLogOut,
    userName,
  } = useHome();

  return (
    <Container>
      <h1>FIAP</h1>
      <h2>Educação que transforma!</h2>
      <h3>Seja bem-vindo, {userName}</h3>
      <Content>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Digite seu usuário"
        />
        <button onClick={goToUserInfo}>Buscar</button>
      </Content>
      <strong onClick={handleLogOut}>Sair</strong>
    </Container>
  );
}

export { Home };
