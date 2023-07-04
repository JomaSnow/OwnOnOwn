import React, { useEffect, useState } from "react";
import Display from "./Display";
import { usePodAgenda } from "../../hooks/PodAgendaProvider";

export default function AgendaComponent() {
  const [updateDisabled, setUpdateDisabled] = useState(true);

  const { agenda, initialAgenda } = usePodAgenda();

  // set disabled when agenda changes
  useEffect(() => {
    if (agenda && initialAgenda) {
      if (
        agenda.segunda_06 !== initialAgenda.segunda_06 ||
        agenda.segunda_08 !== initialAgenda.segunda_08 ||
        agenda.segunda_10 !== initialAgenda.segunda_10 ||
        agenda.segunda_12 !== initialAgenda.segunda_12 ||
        agenda.segunda_14 !== initialAgenda.segunda_14 ||
        agenda.segunda_16 !== initialAgenda.segunda_16 ||
        agenda.segunda_18 !== initialAgenda.segunda_18 ||
        agenda.segunda_20 !== initialAgenda.segunda_20 ||
        agenda.segunda_22 !== initialAgenda.segunda_22 ||
        agenda.terca_06 !== initialAgenda.terca_06 ||
        agenda.terca_08 !== initialAgenda.terca_08 ||
        agenda.terca_10 !== initialAgenda.terca_10 ||
        agenda.terca_12 !== initialAgenda.terca_12 ||
        agenda.terca_14 !== initialAgenda.terca_14 ||
        agenda.terca_16 !== initialAgenda.terca_16 ||
        agenda.terca_18 !== initialAgenda.terca_18 ||
        agenda.terca_20 !== initialAgenda.terca_20 ||
        agenda.terca_22 !== initialAgenda.terca_22 ||
        agenda.quarta_06 !== initialAgenda.quarta_06 ||
        agenda.quarta_08 !== initialAgenda.quarta_08 ||
        agenda.quarta_10 !== initialAgenda.quarta_10 ||
        agenda.quarta_12 !== initialAgenda.quarta_12 ||
        agenda.quarta_14 !== initialAgenda.quarta_14 ||
        agenda.quarta_16 !== initialAgenda.quarta_16 ||
        agenda.quarta_18 !== initialAgenda.quarta_18 ||
        agenda.quarta_20 !== initialAgenda.quarta_20 ||
        agenda.quarta_22 !== initialAgenda.quarta_22 ||
        agenda.quinta_06 !== initialAgenda.quinta_06 ||
        agenda.quinta_08 !== initialAgenda.quinta_08 ||
        agenda.quinta_10 !== initialAgenda.quinta_10 ||
        agenda.quinta_12 !== initialAgenda.quinta_12 ||
        agenda.quinta_14 !== initialAgenda.quinta_14 ||
        agenda.quinta_16 !== initialAgenda.quinta_16 ||
        agenda.quinta_18 !== initialAgenda.quinta_18 ||
        agenda.quinta_20 !== initialAgenda.quinta_20 ||
        agenda.quinta_22 !== initialAgenda.quinta_22 ||
        agenda.sexta_06 !== initialAgenda.sexta_06 ||
        agenda.sexta_08 !== initialAgenda.sexta_08 ||
        agenda.sexta_10 !== initialAgenda.sexta_10 ||
        agenda.sexta_12 !== initialAgenda.sexta_12 ||
        agenda.sexta_14 !== initialAgenda.sexta_14 ||
        agenda.sexta_16 !== initialAgenda.sexta_16 ||
        agenda.sexta_18 !== initialAgenda.sexta_18 ||
        agenda.sexta_20 !== initialAgenda.sexta_20 ||
        agenda.sexta_22 !== initialAgenda.sexta_22 ||
        agenda.sabado_06 !== initialAgenda.sabado_06 ||
        agenda.sabado_08 !== initialAgenda.sabado_08 ||
        agenda.sabado_10 !== initialAgenda.sabado_10 ||
        agenda.sabado_12 !== initialAgenda.sabado_12 ||
        agenda.sabado_14 !== initialAgenda.sabado_14 ||
        agenda.sabado_16 !== initialAgenda.sabado_16 ||
        agenda.sabado_18 !== initialAgenda.sabado_18 ||
        agenda.sabado_20 !== initialAgenda.sabado_20 ||
        agenda.sabado_22 !== initialAgenda.sabado_22 ||
        agenda.domingo_06 !== initialAgenda.domingo_06 ||
        agenda.domingo_08 !== initialAgenda.domingo_08 ||
        agenda.domingo_10 !== initialAgenda.domingo_10 ||
        agenda.domingo_12 !== initialAgenda.domingo_12 ||
        agenda.domingo_14 !== initialAgenda.domingo_14 ||
        agenda.domingo_16 !== initialAgenda.domingo_16 ||
        agenda.domingo_18 !== initialAgenda.domingo_18 ||
        agenda.domingo_20 !== initialAgenda.domingo_20 ||
        agenda.domingo_22 !== initialAgenda.domingo_22
      ) {
        setUpdateDisabled(false);
      } else {
        setUpdateDisabled(true);
      }
    }
  }, [agenda, initialAgenda]);

  function handleUpdate() {}

  return (
    <Display handleUpdate={handleUpdate} updateDisabled={updateDisabled} />
  );
}
