import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// Types
import {
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
  useLazyGetUserReposQuery,
} from "../../../store/services/userAPI";

export default function useInfo() {
  // const [user, setUser] = useState<GithubUser>();
  // const [repos, setRepos] = useState<GithubUserRepos[]>([]);
  //const [loading, setLoading] = useState<boolean>(false);
  // const { loading, getUserInfo, getUserRepos } =
  //   useServices();
  const location = useLocation();
  const githubUser = location.state.githubUser;

  // RTK Query
  const [userInfoTrigger, userInfoResp] =
    useLazyGetUserInfoQuery();
  const [userReposTrigger, userReposResp] =
    useLazyGetUserReposQuery();

  // function fetchGithubUserByLocationWithFetch() {
  //   if (!githubUser) return;

  //   fetchUserReposWithFetch();

  //   fetch(`https://api.github.com/users/${githubUser}`)
  //     .then((r) => r.json())
  //     .then((r: GithubUser) => {
  //       setUser(r);
  //       console.log("USER: ", r);
  //       toast.success(
  //         "Maravilha! Conseguimos achar este usuário no Github!",
  //         {
  //           position: toast.POSITION.TOP_RIGHT,
  //         }
  //       );
  //     })
  //     .catch(() => {
  //       toast.error(
  //         "Opa! Algo não deu certo... Tente novamente!",
  //         {
  //           position: toast.POSITION.TOP_RIGHT,
  //         }
  //       );
  //     });
  // }

  // function fetchUserReposWithFetch() {
  //   fetch(
  //     `https://api.github.com/users/${githubUser}/repos`
  //   )
  //     .then((r) => r.json())
  //     .then((r: GithubUserRepos[]) => {
  //       console.log("REPOS: ", r);
  //       setRepos(r);
  //     })
  //     .catch(() => {
  //       toast.error(
  //         "Opa! Impossível buscar os repositórios deste usuário",
  //         {
  //           position: toast.POSITION.TOP_RIGHT,
  //         }
  //       );
  //     });
  // }

  // function fetchGithubUserByLocationWithAxios() {
  //   if (!githubUser) return;

  //   getUserInfo(githubUser).then((r) => {
  //     setUser(r);
  //     fetchUserReposWithAxios();
  //   });
  // }

  // function fetchUserReposWithAxios() {
  //   getUserRepos(githubUser).then((r) => {
  //     setRepos(r);
  //   });
  // }

  function fetchWithReduxTKQuery() {
    if (!githubUser) return;
    userInfoTrigger(githubUser);
    userReposTrigger(githubUser);
    userInfoResp.error &&
      toast.error(
        "Opa! Impossível buscar os repositórios deste usuário",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
  }

  useEffect(() => {
    fetchWithReduxTKQuery();
  }, []);

  return {
    user: userInfoResp.data,
    repos: userReposResp.data,
    loading:
      userInfoResp.isLoading || userReposResp.isLoading,
  };
}
