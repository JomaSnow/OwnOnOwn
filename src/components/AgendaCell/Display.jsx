import React from "react";
import {
  Cell,
  CloseIcon,
  ModalBodyArea,
  ModalHeaderArea,
  ModalParagraph,
  Title,
  customModalStyles,
} from "./styles";
import Modal from "react-modal";
import MainButton from "../MainButton";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Compromisso from "../Compromisso";

export default function Display({
  status,
  openModal = () => {},
  closeModal = () => {},
  modalIsOpen,
  modalTitle,
  paragraphText,
  modalAction = () => {},
  actionText,
  compromissosCell = [],
}) {
  Modal.setAppElement("#root");
  return (
    <>
      <Cell
        $status={status}
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      ></Cell>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        style={customModalStyles}
      >
        <ModalHeaderArea>
          <Title>{modalTitle}</Title>
          <CloseIcon onClick={closeModal} icon={faClose} />
        </ModalHeaderArea>
        <ModalBodyArea>
          <ModalParagraph>{paragraphText}</ModalParagraph>
          {compromissosCell.map((comp) => {
            if (
              status !== 1 &&
              status !== 0 &&
              comp.status !== 2 &&
              comp.status !== 3
            ) {
              return <Compromisso key={comp.id} compromisso={comp} />;
            }
            return null;
          })}
          <MainButton text={actionText} onClick={modalAction} />
        </ModalBodyArea>
      </Modal>
    </>
  );
}
