import { Link } from "react-router-dom";
import { Formik } from "formik";

// Hooks
import {
  initialValues,
  signInSchema,
  useSignIn,
} from "./hooks/useSignIn";

// Components
import { Button, Input, Separator } from "../../components";

// Styles
import { Container, Content } from "./styles";

export function SignIn() {
  const { handleSignIn } = useSignIn();

  return (
    <Container>
      <Content>
        <h1>FIAP</h1>
        <h3>Educação que transforma!</h3>
        <Separator size={16} />
        <Formik
          initialValues={initialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignIn(values, setSubmitting);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Input
                type="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange("email")}
                placeholder="Digite seu e-mail"
              />
              <Separator size={16} />
              <Input
                value={values.pass}
                error={errors.pass}
                onChange={handleChange("pass")}
                type="password"
                placeholder="Digite sua senha"
              />
              <Separator size={16} />
              <Button
                type="submit"
                loading={isSubmitting}
                onClick={() => handleSubmit()}
                text="Entrar"
              />
            </>
          )}
        </Formik>
        <Separator size={16} />
        <Link to={"/signUp"}>
          Não possui cadastro? <u>Clique aqui</u>
        </Link>
      </Content>
    </Container>
  );
}
