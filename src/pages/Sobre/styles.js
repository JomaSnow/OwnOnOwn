import styled from "styled-components";
import { colors } from "../../util/design";

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
  margin: 0 0 4rem 0;
`;

export const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  padding: 15rem 5% 6rem 5%;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: ${colors.black};
  font-weight: 300;
  letter-spacing: 0.1rem;
  line-height: 2rem;
  margin: 2rem 0 0 0;
`;
