import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useHome() {
  const [input, setInput] = useState<string>("");

  const navigate = useNavigate();

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setInput(event.target.value);
  }

  function goToUserInfo() {
    if (input === "") {
      toast.warn("Atenção! O campo não pode estar vazio", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (input.split(" ")[1]) {
      toast.warn("Por favor, digite um usuário válido", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      navigate("/info", {
        state: {
          githubUser: input,
        },
      });
    }

    // else {
    //   fetch(`https://api.github.com/users/${input}`)
    //     .then((r) => r.json())
    //     .then((r: GithubResponse) => {
    //       console.log(r);
    //       setName(r.name);
    //       setUserUrl(r.html_url);
    //       toast.success(
    //         "Maravilha! Conseguimos achar o usuário do Github!",
    //         {
    //           position: toast.POSITION.TOP_RIGHT,
    //         }
    //       );
    //     })
    //     .catch(() => {
    //       console.log("Deu erro");
    //       toast.error(
    //         "Opa! Algo não deu certo... Tente novamente!",
    //         {
    //           position: toast.POSITION.TOP_RIGHT,
    //         }
    //       );
    //     });
    // }
  }

  return {
    input,
    setInput,
    handleInputChange,
    goToUserInfo,
  };
}
