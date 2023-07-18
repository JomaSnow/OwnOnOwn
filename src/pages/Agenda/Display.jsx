import React from "react";
import { Main, PageTitle, SpanText } from "./styles";
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
          <SpanText>Autorize acesso ao seu POD para criar uma agenda.</SpanText>
        ) : loadingAgenda || loadingCompromissos ? (
          <ClipLoader color={colors.accent} />
        ) : errorAgenda ? (
          <SpanText>{errorAgenda}</SpanText>
        ) : (
          <AgendaComponent />
        )}
      </Main>
      <Footer />
    </>
  );
}
