import styled from "styled-components";

export const Container = styled.div<ButtonStylesProps>`
  width: 100%;
  border: 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: ${(props) =>
      props.loading
        ? "var(--background-dark)"
        : "var(--background)"};
    color: var(--white);
    font-weight: bold;

    cursor: ${(props) =>
      props.loading ? "wait" : "pointer"};

    border-radius: 4px;
    border: 0;

    transition: background-color 0.5s ease;

    &:hover {
      background-color: var(--background-dark);
    }
  }
`;
