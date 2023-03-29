import { Container } from "./styles";

export function Button({
  text,
  loading,
  ...props
}: ButtonProps) {
  return (
    <Container loading={loading}>
      <button disabled={loading} {...props}>
        {loading ? "Carregando..." : text}
      </button>
    </Container>
  );
}
