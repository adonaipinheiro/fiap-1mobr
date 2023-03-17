import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  flex-direction: column;
  background: var(--white);
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 720px;
  width: 90%;
`;

const UserInfoArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    height: 100%;
    width: 150px;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
`;

export {
  Container,
  UserInfoArea,
  UserInfoContent,
  Content,
};
