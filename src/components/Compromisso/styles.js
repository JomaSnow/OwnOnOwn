import styled from "styled-components";
import { colors } from "../../util/design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CompromissoText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.black};
`;

export const CompromissoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-height: 3rem;
  width: 100%;
  padding: 2px 1rem;
  margin: 0.5rem 0;
  border: 1px solid
    ${(props) => (props.$status === 1 ? colors.booked : colors.accent)};
  border-radius: 4rem;
`;

export const CompromissoTextArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 4;
`;

export const CompromissoActionsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

export const CancelIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${colors.accent};
  margin-right: 0.5rem;
`;

export const ConfirmIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${colors.available};
  margin-right: 0.5rem;
`;

export const ActionButton = styled.button`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4rem;
  cursor: pointer;
  padding: 1px 5px;
  margin: 1px 2px;
  &:hover {
    border: solid 1px ${colors.accent};
  }
`;
