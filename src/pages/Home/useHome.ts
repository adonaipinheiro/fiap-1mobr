import { ChangeEvent, useState } from "react";

// Types
import type { GithubResponse } from "./types";

export default function useHome() {
  const [name, setName] = useState<string>("usuário");
  const [userUrl, setUserUrl] = useState<string>("");
  const [input, setInput] = useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function fetchGithubApi() {
    if (input === "") {
      alert("Por favor, digite um usuário");
    } else if (input.split(" ")[1]) {
      alert("Por favor, digite um usuário válido");
    } else {
      fetch(`https://api.github.com/users/${input}`)
        .then((r) => r.json())
        .then((r: GithubResponse) => {
          console.log(r);
          setName(r.name);
          setUserUrl(r.html_url);
        })
        .catch(() => {
          console.log("Deu erro");
        });
    }
  }

  return {
    name,
    input,
    setInput,
    handleInputChange,
    fetchGithubApi,
    userUrl,
  };
}
