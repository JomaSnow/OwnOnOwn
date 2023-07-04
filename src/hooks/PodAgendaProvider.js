import React, { createContext, useContext, useEffect, useState } from "react";
import { useSolid } from "./SolidProvider";
import { getAgenda } from "../api/functions/solid";

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

  useEffect(() => {
    if (webId) {
      setLoadingAgenda(true);
      getAgenda()
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
  }, [webId]);

  async function addLiked(meal) {
    // try {
    //   await addLikedMeal(meal);
    //   const newLikedMeals = await getAgenda();
    //   setAgenda(newLikedMeals);
    // } catch (error) {
    //   setErrorOcurred("Ocorreu um erro ao curtir refeição.");
    //   console.error(error);
    // }
  }

  async function undoLiked(meal) {
    // try {
    //   await undoLike(meal);
    //   const newLikedMeals = await getAgenda();
    //   setAgenda(newLikedMeals);
    // } catch (error) {
    //   setErrorOcurred("Ocorreu um erro ao desfazer curtir.");
    //   console.error(error);
    // }
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
      <PodAgendaUpdateContext.Provider
        value={{ addLiked, undoLiked, setAgenda }}
      >
        {children}
      </PodAgendaUpdateContext.Provider>
    </PodAgendaContext.Provider>
  );
}
