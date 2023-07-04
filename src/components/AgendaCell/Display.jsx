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

export default function Display({
  status,
  openModal = () => {},
  closeModal = () => {},
  modalIsOpen,
  modalTitle,
  paragraphText,
  modalAction = () => {},
  actionText,
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
          <MainButton text={actionText} onClick={modalAction} />
        </ModalBodyArea>
      </Modal>
    </>
  );
}
