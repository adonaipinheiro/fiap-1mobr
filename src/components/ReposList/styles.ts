import styled from "styled-components";

const Container = styled.div`
  color: var(--black);
  display: flex;
  flex-wrap: wrap;
  max-height: 600px;
  overflow: scroll;
  overflow-x: hidden;
`;

const Repo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #0006;
`;

export { Container, Repo };
