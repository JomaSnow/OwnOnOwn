import React from "react";
import {
  FriendAgendaSection,
  FriendSelectionArea,
  Main,
  PageTitle,
  SpanText,
} from "./styles";
import Navbar from "../../components/Navbar";
import { colors } from "../../util/design";
import { ClipLoader } from "react-spinners";

import Footer from "../../components/Footer";
import SelectInput from "../../components/SelectInput";
import { usePodAgenda } from "../../hooks/PodAgendaProvider";
import { usePodFriends } from "../../hooks/PodFriendsProvider";
import { usePodCompromissos } from "../../hooks/PodCompromissos";
import AgendaFriendComponent from "../../components/AgendaFriendComponent";

export default function Display({
  friendsOptions = [],
  selectedFriend,
  setSelectedFriend = () => {},
  friend,
}) {
  const { loadingAgenda } = usePodAgenda();
  const { loadingFriends } = usePodFriends();
  const { loadingCompromissos } = usePodCompromissos();

  return (
    <>
      <Navbar currentPage={0} />
      <Main>
        <PageTitle>Reuniões agendadas</PageTitle>
        <PageTitle>Agendar nova reunião</PageTitle>
        {loadingAgenda || loadingFriends || loadingCompromissos ? (
          <ClipLoader color={colors.accent} />
        ) : (
          <FriendAgendaSection>
            <FriendSelectionArea>
              <div style={{ flex: 3 }}>
                <SpanText>
                  Selecione um parceiro de estudo para ver sua agenda da semana.
                </SpanText>
              </div>
              <div style={{ flex: 1 }}>
                <SelectInput
                  value={selectedFriend}
                  setValue={setSelectedFriend}
                  options={friendsOptions}
                />
              </div>
            </FriendSelectionArea>
            {selectedFriend !== -1 ? (
              <AgendaFriendComponent friend={friend} />
            ) : null}
          </FriendAgendaSection>
        )}
      </Main>
      <Footer />
    </>
  );
}
