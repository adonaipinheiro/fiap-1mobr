import { GithubServices } from "./endPoints/githubServices";

export { useServices } from "./useServices";

/**
 * Função para manipulação de chamadas AJAX/HTTPS
 *
 * @example
 * ```ts
 * Services.getUserInfo(nomeDoUsuario).then(resp => console.log(resp))
 * ```
 */
export const Services = {
  ...GithubServices,
};
