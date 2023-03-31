import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/hooks";

// Actions
import { removeUser } from "../../../store/user/userSlice";
import { removeToken } from "../../../store/auth/authSlice";

export default function useHome() {
  const [input, setInput] = useState<string>("");
  const userName = useAppSelector(
    (state) => state.user.name
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setInput(event.target.value);
  }

  function handleLogOut() {
    dispatch(removeToken());
    dispatch(removeUser());

    navigate("/signin", {
      replace: true,
    });
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
    handleLogOut,
    userName,
  };
}
