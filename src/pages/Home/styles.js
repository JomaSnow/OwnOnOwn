import styled from "styled-components";
import { colors } from "../../util/design";
import { Link } from "react-router-dom";

export const PageTitle = styled.h2`
  font-size: 2.5rem;
  color: ${colors.secondary};
  font-weight: 300;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  color: ${colors.black};
  font-weight: 300;
  margin-bottom: 0.125rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  padding: 15rem 5% 6rem 5%;
`;

export const SpanText = styled.span`
  font-size: 1.5rem;
  color: ${colors.shadow};
`;

export const TextLink = styled(Link)`
  font-size: 1.5rem;
  color: ${colors.accent};
  text-decoration: underline;
  align-self: center;
`;

export const FriendAgendaSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 6rem 3rem;
`;

export const FriendSelectionArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
`;
