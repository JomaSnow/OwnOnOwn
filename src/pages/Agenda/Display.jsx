import React from "react";
import { Main, PageTitle } from "./styles";
import Navbar from "../../components/Navbar";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";
import Footer from "../../components/Footer";
import AgendaComponent from "../../components/AgendaComponent";
import { usePodAgenda } from "../../hooks/PodAgendaProvider";
import { useSolid } from "../../hooks/SolidProvider";
import { usePodCompromissos } from "../../hooks/PodCompromissos";

export default function Display() {
  const { loadingAgenda, errorAgenda } = usePodAgenda();
  const { loadingCompromissos } = usePodCompromissos();
  const { webId } = useSolid();
  return (
    <>
      <Navbar currentPage={2} />
      <Main>
        <PageTitle>Agenda</PageTitle>
        {!webId ? (
          <h2>Autorize acesso ao seu POD para criar uma agenda.</h2>
        ) : loadingAgenda || loadingCompromissos ? (
          <ClipLoader color={colors.accent} />
        ) : errorAgenda ? (
          <h2>{errorAgenda}</h2>
        ) : (
          <AgendaComponent />
        )}
      </Main>
      <Footer />
    </>
  );
}
