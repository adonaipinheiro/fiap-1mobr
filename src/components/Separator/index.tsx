import { Container } from "./styles";

export function Separator({
  size,
  horizontal,
}: SeparatorProps) {
  return <Container size={size} horizontal={horizontal} />;
}
