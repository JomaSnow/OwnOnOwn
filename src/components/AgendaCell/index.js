import React, { useEffect, useState } from "react";
import Display from "./Display";
import { getModalTitleFromCellDayTime } from "../../util/modalTitle";
import { usePodAgendaUpdate } from "../../hooks/PodAgendaProvider";

export default function AgendaCell({ availability = 0, cell_day_time }) {
  const [status, setStatus] = useState(availability);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [actionText, setActionText] = useState("");

  const { setAgenda } = usePodAgendaUpdate();

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
        setParagraph(
          "Este horário está atualmente definido como LIVRE e pode ser escolhido como horário para reunir."
        );
        setActionText("Mudar para INDISPONÍVEL");
        break;

      case 2:
        setParagraph(
          "Este horário está com uma reunião pendente de confirmação."
        );
        setActionText("OK");
        break;

      case 3:
        setParagraph("Este horário está com uma reunião marcada.");
        setActionText("CANCELAR REUNIÃO");
        break;

      default:
        setParagraph("");
        setActionText("");
        break;
    }
  }, [availability, cell_day_time]);

  function openModal() {
    setModalIsOpen(true);
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
        setAgenda((agendaVelha) => {
          let agendaNova = { ...agendaVelha };
          agendaNova[cell_day_time] = 0;
          return agendaNova;
        });
        break;

      case 3:
        console.log("Cancelar reunião agendada");
        break;

      default:
        console.log("Ação");
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
    />
  );
}