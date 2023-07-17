import React, { useEffect, useState } from "react";
import Display from "./Display";
import { usePodFriends } from "../../hooks/PodFriendsProvider";
import { getModalTitleFromCellDayTime } from "../../util/modalTitle";
import { usePodCompromissosUpdate } from "../../hooks/PodCompromissos";

export default function Compromisso({ compromisso }) {
  const [text, setText] = useState("");
  const [friendName, setFriendName] = useState("Amigo");

  const { friends } = usePodFriends();
  const { updateCompromissosState } = usePodCompromissosUpdate();

  useEffect(() => {
    for (const friend of friends) {
      if (compromisso.friend_pod_url === friend.friendWebId) {
        setFriendName(friend.nome);
      }
    }
  }, [friends, compromisso]);

  useEffect(() => {
    let day_time = getModalTitleFromCellDayTime(compromisso.day_time);

    let compText =
      compromisso.status === 0
        ? `Você enviou uma proposta de reunião ${day_time} para ${friendName}.`
        : compromisso.status === 1
        ? `Reunião confirmada ${day_time} com ${friendName}.`
        : compromisso.status === 2
        ? `Você cancelou a reunião de ${day_time} com ${friendName}.`
        : compromisso.status === 3
        ? `${friendName} cancelou a reunião de ${day_time}.`
        : `${friendName} quer reunir ${day_time}.`;

    setText(compText);
  }, [compromisso, friendName]);

  async function cancelCompromisso() {
    if (window.confirm("Tem certeza que quer cancelar esta reunião?")) {
      await updateCompromissosState(compromisso, 2);
    }
  }

  async function confirmCompromisso() {
    if (
      window.confirm(
        "Tem certeza que quer confirmar esta reunião? Confirmar esta reunião irá cancelar todas as outras propostas recebidas ou enviadas para este horário."
      )
    ) {
      await updateCompromissosState(compromisso, 1);
    }
  }

  return (
    <Display
      text={text}
      status={compromisso.status}
      cancelCompromisso={cancelCompromisso}
      confirmCompromisso={confirmCompromisso}
    />
  );
}
