import { toast } from "react-toastify";
import { instance } from "./config";
import type { GithubUser, GithubUserRepos } from "./types";

/**
 * Função para manipulação de chamadas AJAX/HTTPS
 *
 * @example
 * ```ts
 * Services.getUserInfo(nomeDoUsuario).then(resp => console.log(resp))
 * ```
 */
export const Services = {
  /**
   * Função que retorna user ou undefined
   * @param userName
   * @returns `user` | `undefined`
   */
  getUserInfo: async (userName: string) => {
    try {
      const user: GithubUser = await instance
        .get(`users/${userName}`)
        .then((r) => r.data);
      toast.success(
        "Maravilha! Conseguimos achar este usuário no Github!",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return user;
    } catch (_) {
      toast.error(
        "Opa! Algo não deu certo... Tente novamente!",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  },
  getUserRepos: async (userName: string) => {
    try {
      const userRepos: GithubUserRepos[] = await instance
        .get(`users/${userName}/repos`)
        .then((r) => r.data);
      return userRepos;
    } catch (_) {
      toast.error(
        "Opa! Impossível buscar os repositórios deste usuário",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return [];
    }
  },
};
