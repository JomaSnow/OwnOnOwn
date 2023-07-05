import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import { getCompromissos } from "../api/functions/solid";
import { usePodFriends } from "./PodFriendsProvider";

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
  const [loadingCompromissos, setLoadingCompromissos] = useState(true);
  const [errorOcurred, setErrorOcurred] = useState(null);

  const { webId } = useSolid();
  const { loadingFriends, friends } = usePodFriends();

  useEffect(() => {
    console.log(compromissos);
  }, [compromissos]);

  useEffect(() => {
    if (webId && !loadingFriends) {
      setLoadingCompromissos(true);
      getCompromissos(null, friends)
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
  }, [webId, loadingFriends, friends]);

  async function fetchCompromissos() {
    if (webId) {
      setLoadingCompromissos(true);
      getCompromissos(null, null)
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
