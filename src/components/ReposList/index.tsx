import { GithubUserRepos } from "../../pages/Info/types";

interface ReposListProps {
  repos: GithubUserRepos[];
}

// Styles
import { Container, Repo } from "./styles";

function ReposList({ repos }: ReposListProps) {
  return (
    <Container>
      {repos.map((repo) => (
        <Repo key={repo.id}>
          <strong>{repo.name}</strong>
          <span>{repo.language}</span>
          <a href={repo.html_url} target="_blank">
            {repo.html_url}
          </a>
        </Repo>
      ))}
    </Container>
  );
}

export { ReposList };
