// Hooks
import { Input } from "../../components";
import useHome from "./hooks/useHome";

// Styles
import { Container, Content } from "./styles";

function Home() {
  const { input, handleInputChange, goToUserInfo } =
    useHome();

  return (
    <Container>
      <h1>FIAP</h1>
      <h2>Educação que transforma!</h2>
      <Content>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Digite seu usuário"
        />
        <button onClick={goToUserInfo}>Buscar</button>
      </Content>
    </Container>
  );
}

export { Home };
