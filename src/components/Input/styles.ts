import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #0005;
    border-radius: 4px;
    height: 40px;
  }

  span {
    margin-top: 0.25rem;
    font-size: 0.9rem;
    color: red;
    font-style: italic;
  }
`;
