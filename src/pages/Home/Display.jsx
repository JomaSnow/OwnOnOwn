import React from "react";
import {
  Section,
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
import { useSolid } from "../../hooks/SolidProvider";
import Compromisso from "../../components/Compromisso";

export default function Display({
  friendsOptions = [],
  selectedFriend,
  setSelectedFriend = () => {},
  friend,
}) {
  const { loadingAgenda } = usePodAgenda();
  const { loadingFriends } = usePodFriends();
  const { compromissos, loadingCompromissos } = usePodCompromissos();
  const { webId } = useSolid();

  return (
    <>
      <Navbar currentPage={0} />
      <Main>
        <PageTitle>Reuniões agendadas</PageTitle>
        {!webId ? (
          <SpanText>
            Autorize acesso ao seu POD para visualizar reuniões.
          </SpanText>
        ) : loadingFriends || loadingCompromissos ? (
          <ClipLoader color={colors.accent} />
        ) : (
          <Section
            style={{
              overflowY: "auto",
              maxHeight: "12rem",
              paddingRight: "2rem",
            }}
          >
            {compromissos.length === 0 && (
              <SpanText>Nenhuma reunião para exibir.</SpanText>
            )}
            {compromissos
              .sort(function (a, b) {
                var keyA = new Date(a.updated_at),
                  keyB = new Date(b.updated_at);
                // Compare the 2 dates
                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
                return 0;
              })
              .map((comp) => {
                return <Compromisso compromisso={comp} />;
              })}
          </Section>
        )}
        <PageTitle>Agendar nova reunião</PageTitle>
        {!webId ? (
          <SpanText>
            Autorize acesso ao seu POD para agendar uma reunião.
          </SpanText>
        ) : (
          <>
            {loadingAgenda || loadingFriends || loadingCompromissos ? (
              <ClipLoader color={colors.accent} />
            ) : (
              <Section>
                <FriendSelectionArea>
                  <div style={{ flex: 3 }}>
                    <SpanText>
                      Selecione um parceiro de estudo para ver sua agenda da
                      semana.
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
              </Section>
            )}
          </>
        )}
      </Main>
      <Footer />
    </>
  );
}
