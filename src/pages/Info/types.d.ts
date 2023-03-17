export interface GithubUser {
  name: string;
  login: string;
  html_url: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
}

export interface GithubUserRepos {
  name: string;
  language: string;
  html_url: string;
  id: number;
}
