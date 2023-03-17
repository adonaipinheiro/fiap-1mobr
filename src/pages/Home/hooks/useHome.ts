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
  }

  return {
    input,
    setInput,
    handleInputChange,
    goToUserInfo,
  };
}
