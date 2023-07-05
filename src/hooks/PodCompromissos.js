import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import { getCompromissos } from "../api/functions/solid";

const PodCompromissosContext = createContext();
const PodCompromissosUpdateContext = createContext();

export function usePodCompromissos() {
  return useContext(PodCompromissosContext);
}

export function usePodCompromissosUpdate() {
  return useContext(PodCompromissosUpdateContext);
}

export function PodCompromissosProvider({ children }) {
  const [compromissos, setCompromissos] = useState(null);
  const [loadingCompromissos, setLoadingCompromissos] = useState(false);
  const [errorOcurred, setErrorOcurred] = useState(null);

  const { webId } = useSolid();

  useEffect(() => {
    if (webId) {
      setLoadingCompromissos(true);
      getCompromissos()
        .then((fetchedCompromissos) => {
          setCompromissos(fetchedCompromissos);
        })
        .catch((error) => {
          setErrorOcurred(
            "Ocorreu um erro ao resgatar compromissos do usuário."
          );
          console.error(error);
        })
        .finally(() => {
          setLoadingCompromissos(false);
        });
    }
  }, [webId]);

  async function fetchCompromissos() {
    if (webId) {
      setLoadingCompromissos(true);
      getCompromissos()
        .then((fetchedCompromissos) => {
          setCompromissos(fetchedCompromissos);
        })
        .catch((error) => {
          setErrorOcurred(
            "Ocorreu um erro ao resgatar compromissos do usuário."
          );
          console.error(error);
        })
        .finally(() => {
          setLoadingCompromissos(false);
        });
    }
  }

  return (
    <PodCompromissosContext.Provider
      value={{
        compromissos,
        loadingCompromissos: loadingCompromissos,
        errorCompromissos: errorOcurred,
      }}
    >
      <PodCompromissosUpdateContext.Provider value={{ fetchCompromissos }}>
        {children}
      </PodCompromissosUpdateContext.Provider>
    </PodCompromissosContext.Provider>
  );
}
