import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    if (false) {
      navigate("/home");
    } else {
      navigate("signIn");
    }
  }, []);

  return (
    <Container>
      <h1>FIAP</h1>
      <MutatingDots
        height="100"
        width="100"
        color="#ffffff"
        secondaryColor="#efefef"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
}
