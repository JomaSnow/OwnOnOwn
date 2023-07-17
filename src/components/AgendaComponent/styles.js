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

export const CaptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex: 1;
  margin-bottom: 4px;
`;

export const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
`;

export const CaptionLabel = styled.span`
  font-size: 1rem;
  color: ${colors.black};
`;

export const CaptionCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  flex: 1;
  background-color: ${(props) =>
    props.$status === 0
      ? colors.unavailable
      : props.$status === 1
      ? colors.available
      : props.$status === 2
      ? colors.pending
      : colors.booked};
  margin: 0 4px;
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
