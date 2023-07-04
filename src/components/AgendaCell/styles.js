import styled from "styled-components";
import { colors } from "../../util/design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cell = styled.button`
  display: flex;
  width: 85%;
  height: 95%;
  background-color: ${(props) =>
    props.$status === 3
      ? colors.booked
      : props.$status === 2
      ? colors.pending
      : props.$status === 1
      ? colors.available
      : colors.unavailable};

  border: 5px solid
    ${(props) =>
      props.$status === 3
        ? colors.booked
        : props.$status === 2
        ? colors.pending
        : props.$status === 1
        ? colors.available
        : colors.unavailable};
  cursor: pointer;
  &:hover {
    border: 5px solid ${colors.accent};
  }
`;

export const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
};

export const ModalHeaderArea = styled.div`
  width: 40rem;
  height: 3rem;
  display: flex;
  border-bottom: solid ${colors.secondary} 1px;
  flex-direction: row;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBodyArea = styled.div`
  width: 40rem;
  min-height: 10rem;
  max-height: 20rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: ${colors.primary};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${colors.accent};
  cursor: pointer;
`;

export const ModalParagraph = styled.p`
  font-size: 1rem;
  color: ${colors.black};
  margin: 1rem 0;
`;
