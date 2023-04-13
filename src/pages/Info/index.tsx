// Components
import { ReposList } from "../../components";

// Hooks
import useInfo from "./hooks/useInfo";

// Styles
import {
  Container,
  Content,
  UserInfoArea,
  UserInfoContent,
} from "./styles";

function Info() {
  const { user, repos, loading } = useInfo();

  if (loading) {
    return (
      <div>
        <h1>Carregando</h1>
      </div>
    );
  }

  if (!user || !repos) {
    return <div>Não tem usuário</div>;
  }

  return (
    <Container>
      <Content>
        <UserInfoArea>
          <img src={user.avatar_url} alt="Avatar" />
          <UserInfoContent>
            <strong>{user.name}</strong>
            <span>{user.login}</span>
            <span>Nº Repos: {user.public_repos}</span>
            <span>{user.bio}</span>
            <a href={user.html_url} target="_blank">
              {user.html_url}
            </a>
          </UserInfoContent>
        </UserInfoArea>
        <ReposList repos={repos} />
      </Content>
    </Container>
  );
}

export { Info };
