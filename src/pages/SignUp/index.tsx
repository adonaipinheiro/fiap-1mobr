import { Link } from "react-router-dom";
import { Formik } from "formik";

// Components
import { Button, Input, Separator } from "../../components";

// Styles
import { Container, Content } from "./styles";

// Hooks
import useSignUp from "./hooks/useSignUp";

export function SignUp() {
  const { initialValues, signUpSchema, handleSignUp } =
    useSignUp();

  return (
    <Container>
      <Content>
        <h1>FIAP</h1>
        <h3>Educação que transforma!</h3>
        <Separator size={16} />
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSignUp(values, setSubmitting);
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
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
                placeholder="Digite seu nome"
              />
              <Separator size={16} />
              <Input
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
                placeholder="Digite seu e-mail"
              />
              <Separator size={16} />
              <Input
                type="password"
                value={values.pass}
                onChange={handleChange("pass")}
                error={errors.pass}
                placeholder="Digite sua senha"
              />
              <Separator size={16} />
              <Input
                type="password"
                value={values.repeatPass}
                onChange={handleChange("repeatPass")}
                error={errors.repeatPass}
                placeholder="Confirme sua senha"
              />
              <Separator size={16} />
              <Button
                type="submit"
                loading={isSubmitting}
                text="Cadastrar"
                onClick={() => handleSubmit()}
              />
            </>
          )}
        </Formik>

        <Separator size={16} />
        <Link to={"/signIn"}>
          Já possui cadastro? <u>Clique aqui</u>
        </Link>
      </Content>
    </Container>
  );
}
