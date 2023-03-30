import { Container } from "./styles";

export function Input({ error, ...props }: InputProps) {
  return (
    <Container>
      <input {...props} />
      {error && <span>* {error}</span>}

      {/* {true || false}
      {true && false}
      {true ? true : false} */}
    </Container>
  );
}
