import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

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

  function handleSignIn(
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) {
    console.log(values);

    setTimeout(() => {
      navigate("/home");
      setSubmitting(false);
    }, 2000);
  }

  return {
    handleSignIn,
  };
}
