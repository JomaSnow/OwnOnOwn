import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import {
  addCompromisso,
  getCompromissos,
  updateCompromisso,
} from "../api/functions/solid";
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

  async function updateCompromissosState(comp, status) {
    setLoadingCompromissos(true);

    let auxComps = compromissos;

    if (status === 1) {
      const compsOnSameDay = [];

      for (const sameDayComp of compromissos) {
        if (
          sameDayComp.day_time === comp.day_time &&
          comp.id !== sameDayComp.id
        ) {
          compsOnSameDay.push(sameDayComp);
        }
      }

      for (const sameDayComp of compsOnSameDay) {
        if (sameDayComp.status !== 3) {
          auxComps = await updateCompromisso(sameDayComp, 2, auxComps);
        }
      }
    }

    const updatedCompromissos = await updateCompromisso(comp, status, auxComps);

    setCompromissos(updatedCompromissos);

    setLoadingCompromissos(false);
  }

  async function addCompromissosState(day_time, friend_pod_url) {
    setLoadingCompromissos(true);

    const newComp = { day_time, friend_pod_url };

    const updatedCompromissos = await addCompromisso(newComp, 0, compromissos);

    setCompromissos(updatedCompromissos);

    setLoadingCompromissos(false);
  }

  return (
    <PodCompromissosContext.Provider
      value={{
        compromissos,
        loadingCompromissos: loadingCompromissos,
        errorCompromissos: errorOcurred,
      }}
    >
      <PodCompromissosUpdateContext.Provider
        value={{
          fetchCompromissos,
          updateCompromissosState,
          addCompromissosState,
        }}
      >
        {children}
      </PodCompromissosUpdateContext.Provider>
    </PodCompromissosContext.Provider>
  );
}
