import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import { getAgenda, updateAgenda } from "../api/functions/solid";
import { usePodCompromissos } from "./PodCompromissos";

const PodAgendaContext = createContext();
const PodAgendaUpdateContext = createContext();

export function usePodAgenda() {
  return useContext(PodAgendaContext);
}

export function usePodAgendaUpdate() {
  return useContext(PodAgendaUpdateContext);
}

export function PodAgendaProvider({ children }) {
  const [agenda, setAgenda] = useState(null);
  const [initialAgenda, setInitialAgenda] = useState(null);
  const [loadingAgenda, setLoadingAgenda] = useState(false);
  const [errorOcurred, setErrorOcurred] = useState(null);

  const { webId } = useSolid();
  const { loadingCompromissos, compromissos } = usePodCompromissos();

  useEffect(() => {
    console.log(agenda);
  }, [agenda]);

  useEffect(() => {
    if (webId && !loadingCompromissos) {
      setLoadingAgenda(true);
      getAgenda(null, compromissos)
        .then((fetchedAgenda) => {
          setAgenda(fetchedAgenda);
          setInitialAgenda(fetchedAgenda);
        })
        .catch((error) => {
          setErrorOcurred("Ocorreu um erro ao resgatar agenda do usuário.");
          console.error(error);
        })
        .finally(() => {
          setLoadingAgenda(false);
        });
    }
  }, [webId, loadingCompromissos, compromissos]);

  async function updateAgendaState() {
    setLoadingAgenda(true);

    const updatedAgenda = await updateAgenda({
      updateEverything: true,
      updatedAgenda: agenda,
    });

    setAgenda(updatedAgenda);
    setInitialAgenda(updatedAgenda);

    setLoadingAgenda(false);
  }

  return (
    <PodAgendaContext.Provider
      value={{
        agenda,
        initialAgenda,
        loadingAgenda: loadingAgenda,
        errorAgenda: errorOcurred,
      }}
    >
      <PodAgendaUpdateContext.Provider value={{ updateAgendaState, setAgenda }}>
        {children}
      </PodAgendaUpdateContext.Provider>
    </PodAgendaContext.Provider>
  );
}
