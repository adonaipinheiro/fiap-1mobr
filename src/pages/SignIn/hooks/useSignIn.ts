import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Redux
import { useAppDispatch } from "../../../store/hooks";

// Actions
import { addToken } from "../../../store/auth/authSlice";
import { addUser } from "../../../store/user/userSlice";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, digite um e-mail válido")
    .required("Campo obrigatório")
    .trim(),
  pass: Yup.string().required("Campo obrigatório").trim(),
});

export const initialValues = {
  email: "a@a.com.br",
  pass: "123456",
};

export function useSignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleSignIn(
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) {
    console.log(values);

    setTimeout(() => {
      dispatch(addToken("@TOKEN/123"));
      dispatch(
        addUser({
          name: "Adonai Pinheiro",
          email: values.email,
        })
      );
      navigate("/home");
      setSubmitting(false);
    }, 2000);
  }

  return {
    handleSignIn,
  };
}
