import React, { useEffect, useState } from "react";
import Display from "./Display";
import { getModalTitleFromCellDayTime } from "../../util/modalTitle";
import {
  usePodAgenda,
  usePodAgendaUpdate,
} from "../../hooks/PodAgendaProvider";
import {
  usePodCompromissos,
  usePodCompromissosUpdate,
} from "../../hooks/PodCompromissos";

export default function AgendaCell({
  availability = 0,
  cell_day_time,
  isFriendCell = false,
  friendWebId,
}) {
  const [status, setStatus] = useState(availability);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [actionText, setActionText] = useState("");
  const [compromissosCell, setCompromissosCell] = useState([]);

  const { agenda } = usePodAgenda();
  const { setAgenda } = usePodAgendaUpdate();
  const { compromissos } = usePodCompromissos();
  const {
    addCompromissosState,
    deleteAllCancelledCompromissosFromSameDayState,
  } = usePodCompromissosUpdate();

  useEffect(() => {
    const comps = [];
    for (const comp of compromissos) {
      if (comp.day_time === cell_day_time) {
        comps.push(comp);
      }
    }
    setCompromissosCell(comps);
  }, [compromissos, cell_day_time]);

  useEffect(() => {
    setStatus(availability);
    const modalTitle = getModalTitleFromCellDayTime(cell_day_time);
    setTitle(modalTitle);
    switch (availability) {
      case 0:
        setParagraph(
          "Este horário está atualmente definido como INDISPONÍVEL e não pode ser escolhido como horário para reunir."
        );
        setActionText("Mudar para LIVRE");
        break;

      case 1:
        if (isFriendCell) {
          setParagraph(
            "Este horário está disponível. Você pode enviar uma proposta para marcar uma reunião com este amigo."
          );
          setActionText("Solicitar reunião");
        } else {
          setParagraph(
            "Este horário está atualmente definido como LIVRE e pode ser escolhido como horário para reunir."
          );
          setActionText("Mudar para INDISPONÍVEL");
        }
        break;

      case 2:
        if (isFriendCell) {
          setParagraph(
            "Este horário está disponível. Você pode enviar uma proposta para marcar uma reunião com este amigo."
          );
          setActionText("Solicitar reunião");
        } else {
          setParagraph(
            "Este horário está com uma ou mais reuniões pendentes de confirmação."
          );
          setActionText("OK");
        }
        break;

      case 3:
        if (isFriendCell) {
          setParagraph(
            "Este horário está ocupado e não pode mais receber solicitações de reunião."
          );
        } else {
          setParagraph("Este horário está com uma reunião confirmada.");
        }
        setActionText("OK");
        break;

      default:
        setParagraph("");
        setActionText("");
        break;
    }
  }, [availability, cell_day_time, isFriendCell]);

  function openModal() {
    if (!isFriendCell || availability !== 0) {
      setModalIsOpen(true);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  async function actionModal() {
    switch (availability) {
      case 0:
        setAgenda((agendaVelha) => {
          let agendaNova = { ...agendaVelha };
          agendaNova[cell_day_time] = 1;
          return agendaNova;
        });
        break;

      case 1:
        if (isFriendCell) {
          if (
            window.confirm(
              "Tem certeza que deseja enviar uma solicitação de reunião para este amigo nesta data?"
            )
          ) {
            if (agenda[cell_day_time] === 0 || agenda[cell_day_time] === 3) {
              window.alert(
                "Você não tem disponibilidade na sua agenda para este horário. Altere sua agenda ou escolha outro horário."
              );
            } else {
              await addCompromissosState(cell_day_time, friendWebId);
            }
          }
        } else {
          /* apaga todos os compromissos com status 2 ou 3 nesse day_time antes de mudar a agenda para indisponivel, senao o getAgenda vai permanentemente settar pra livre */
          await deleteAllCancelledCompromissosFromSameDayState(cell_day_time);

          // setta dia para indisponivel
          setAgenda((agendaVelha) => {
            let agendaNova = { ...agendaVelha };
            agendaNova[cell_day_time] = 0;
            return agendaNova;
          });
        }
        break;

      case 2:
        if (isFriendCell) {
          if (
            window.confirm(
              "Tem certeza que deseja enviar uma solicitação de reunião para este amigo nesta data?"
            )
          ) {
            if (agenda[cell_day_time] === 0 || agenda[cell_day_time] === 3) {
              window.alert(
                "Você não tem disponibilidade na sua agenda para este horário. Altere sua agenda ou escolha outro horário."
              );
            } else {
              await addCompromissosState(cell_day_time, friendWebId);
            }
          }
        } else {
          console.log("OK");
        }
        break;

      default:
        console.log("OK");
        break;
    }
    closeModal();
  }

  return (
    <Display
      status={status}
      openModal={openModal}
      closeModal={closeModal}
      modalIsOpen={modalIsOpen}
      modalTitle={title}
      paragraphText={paragraph}
      modalAction={actionModal}
      actionText={actionText}
      compromissosCell={compromissosCell}
      isFriendCell={isFriendCell}
    />
  );
}
