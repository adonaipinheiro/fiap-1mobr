import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Types
import { GithubUser, GithubUserRepos } from "../types";

export default function useInfo() {
  const [user, setUser] = useState<GithubUser>();
  const [repos, setRepos] = useState<GithubUserRepos[]>([]);
  const location = useLocation();
  const githubUser = location.state.githubUser;

  function fetchGithubUserByLocation() {
    if (!githubUser) return;

    fetchUserRepos();

    fetch(`https://api.github.com/users/${githubUser}`)
      .then((r) => r.json())
      .then((r: GithubUser) => {
        setUser(r);
        console.log("USER: ", r);
        toast.success(
          "Maravilha! Conseguimos achar este usuário no Github!",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      })
      .catch(() => {
        toast.error(
          "Opa! Algo não deu certo... Tente novamente!",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  }

  function fetchUserRepos() {
    fetch(
      `https://api.github.com/users/${githubUser}/repos`
    )
      .then((r) => r.json())
      .then((r: GithubUserRepos[]) => {
        console.log("REPOS: ", r);
        setRepos(r);
      })
      .catch(() => {
        toast.error(
          "Opa! Impossível buscar os repositórios deste usuário",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  }

  useEffect(() => {
    fetchGithubUserByLocation();
  }, []);

  return {
    user,
    repos,
  };
}
