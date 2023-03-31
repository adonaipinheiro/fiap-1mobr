import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function useSignUp() {
  const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string()
      .email("Por favor, digite um e-mail válido")
      .required("Campo obrigatório")
      .trim(),
    pass: Yup.string().required("Campo obrigatório").trim(),
    repeatPass: Yup.string()
      .oneOf(
        [Yup.ref("pass")],
        "As senhas não correspondem"
      )
      .required("Campo obrigatório"),
  });

  const initialValues = {
    name: "Adonai Pinheiro",
    email: "a@a.com.br",
    pass: "123456",
    repeatPass: "123456",
  };

  function handleSignUp(
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
    signUpSchema,
    initialValues,
    handleSignUp,
  };
}
