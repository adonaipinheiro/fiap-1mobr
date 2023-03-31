import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  a {
    color: var(--white);
    margin-top: 1rem;
  }

  strong {
    margin-top: 1rem;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: var(--white);
  margin-top: 1rem;
  border-radius: 0.5rem;
  width: 90%;
  max-width: 720px;
  color: var(--black);

  span {
    font-size: 3rem;
  }

  button {
    cursor: pointer;
    height: 40px;
    margin-left: 1rem;
    padding: 0 10px;
    border: none;
    border-radius: 0.25rem;
    background: var(--background);
    color: var(--white);
    font-weight: bold;
  }
`;

export { Container, Content };
