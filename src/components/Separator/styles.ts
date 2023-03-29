import styled from "styled-components";

export const Container = styled.div<SeparatorProps>`
  height: ${(props) =>
    props.horizontal ? 0 : `${props.size}px`};
  width: ${(props) =>
    props.horizontal ? `${props.size}px` : 0};
`;
