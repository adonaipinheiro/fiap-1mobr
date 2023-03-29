import { Container } from "./styles";

export function Input({ error, ...props }: InputProps) {
  return (
    <Container>
      <input {...props} />
      {error && <span>* {error}</span>}
    </Container>
  );
}
