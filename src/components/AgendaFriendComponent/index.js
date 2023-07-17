import React from "react";
import Display from "./Display";

export default function AgendaFriendComponent({
  friend = { nome: "Amigo", agenda: null },
}) {
  return <Display nome={friend.nome} agenda={friend.agenda} />;
}
