import React from "react";
import {
  ActionButton,
  CancelIcon,
  CompromissoActionsArea,
  CompromissoText,
  CompromissoTextArea,
  CompromissoWrapper,
  ConfirmIcon,
} from "./styles";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Display({
  text,
  status,
  confirmCompromisso = () => {},
  cancelCompromisso = () => {},
}) {
  return (
    <CompromissoWrapper>
      <CompromissoTextArea>
        <CompromissoText>{text}</CompromissoText>
      </CompromissoTextArea>
      <CompromissoActionsArea>
        {status === 0 ? (
          <>
            <ActionButton onClick={cancelCompromisso}>
              <CancelIcon icon={faClose} /> Cancelar
            </ActionButton>
          </>
        ) : status === 1 ? (
          <>
            <ActionButton onClick={cancelCompromisso}>
              <CancelIcon icon={faClose} /> Cancelar
            </ActionButton>
          </>
        ) : status === 2 ? (
          <></>
        ) : status === 3 ? (
          <></>
        ) : (
          <>
            <ActionButton onClick={confirmCompromisso}>
              <ConfirmIcon icon={faCheck} /> Confirmar
            </ActionButton>
            <ActionButton onClick={cancelCompromisso}>
              <CancelIcon icon={faClose} /> Cancelar
            </ActionButton>
          </>
        )}
      </CompromissoActionsArea>
    </CompromissoWrapper>
  );
}
