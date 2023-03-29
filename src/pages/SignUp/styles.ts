import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 90%;
  max-width: 720px;
  border-radius: 4px;
  padding: 1rem;

  h1,
  h3 {
    color: var(--background);
  }

  a {
    color: var(--background);
    text-decoration: none;
  }
`;
