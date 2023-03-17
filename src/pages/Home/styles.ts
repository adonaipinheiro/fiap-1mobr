import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
  }

  a {
    color: var(--white);
    margin-top: 1rem;
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

  input {
    padding: 0.5rem;
    border-color: #0005;
    border-radius: 0.25rem;
    border-width: 1px;
    width: 100%;
    height: 40px;
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
