import styled from "styled-components";
import { colors } from "../../util/design";

export const AgendaArea = styled.div`
  display: flex;
  position: relative;
  margin: 1rem 3rem;
  height: 45rem;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
`;

export const CellRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1;
  margin-bottom: 4px;
`;

export const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  margin-bottom: 4px;
`;

export const InfoSpan = styled.span`
  color: ${colors.black};
  font-weight: 700;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const HeaderSpan = styled.span`
  font-size: 1rem;
  color: ${colors.black};
  font-weight: 500;
`;
