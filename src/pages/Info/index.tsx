import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Types
import type { GithubUser } from "./types";

function Info() {
  const [user, setUser] = useState<GithubUser>();
  const location = useLocation();
  const githubUser = location.state.githubUser;

  function fetchGithubUserByLocation() {
    if (!githubUser) return;

    fetch(`https://api.github.com/users/${githubUser}`)
      .then((r) => r.json())
      .then((r: GithubUser) => {
        setUser(r);
        console.log(r);
        toast.success(
          "Maravilha! Conseguimos achar o usuário do Github!",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      })
      .catch(() => {
        console.log("Deu erro");
        toast.error(
          "Opa! Algo não deu certo... Tente novamente!",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  }

  useEffect(() => {
    fetchGithubUserByLocation();
  }, []);

  if (!githubUser) {
    return <div>Não tem user</div>;
  }

  return (
    <div>
      <strong>{user?.name}</strong>
      <span>{user?.login}</span>
      <a href={user?.html_url} target="_blank">
        {user?.html_url}
      </a>
      <img src={user?.avatar_url} alt="" />
    </div>
  );
}

export { Info };
