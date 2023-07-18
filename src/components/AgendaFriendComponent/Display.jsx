import React from "react";
import {
  ActionRow,
  AgendaArea,
  CaptionCell,
  CaptionLabel,
  CaptionRow,
  CaptionWrapper,
  CellRow,
  Column,
  HeaderRow,
  HeaderSpan,
  InfoSpan,
  MealSpan,
} from "./styles";
import Cell from "../AgendaCell";

export default function Display({
  agenda,
  nome,
  friendWebId,
  showSuggestion = true,
  hora_refeicao = 0,
}) {
  return !agenda ? (
    <h2>
      Agenda não carregou corretamente ou {nome} ainda não utiliza Tutor.
      Atualize a página e tente novamente.
    </h2>
  ) : (
    <AgendaArea>
      <ActionRow>
        <InfoSpan>Agenda de {nome}</InfoSpan>
        {showSuggestion &&
          (hora_refeicao === 0 ? (
            <MealSpan>
              Vocês dois gostam do café do RU de hoje! Por que não reunir no
              campus hoje, às 06h-08h?
            </MealSpan>
          ) : hora_refeicao === 1 ? (
            <MealSpan>
              Vocês dois gostam do almoço do RU de hoje! Por que não reunir no
              campus hoje, às 12h-14h?
            </MealSpan>
          ) : (
            <MealSpan>
              Vocês dois gostam da janta do RU de hoje! Por que não reunir no
              campus hoje, às 18h-20h?
            </MealSpan>
          ))}
      </ActionRow>
      <HeaderRow>
        <Column></Column>
        <Column>
          <HeaderSpan>Segunda</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Terça</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Quarta</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Quinta</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Sexta</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Sábado</HeaderSpan>
        </Column>
        <Column>
          <HeaderSpan>Domingo</HeaderSpan>
        </Column>
      </HeaderRow>
      <CellRow>
        <Column>
          <HeaderSpan>06h-08h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_06}
            cell_day_time={"segunda_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_06}
            cell_day_time={"terca_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_06}
            cell_day_time={"quarta_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_06}
            cell_day_time={"quinta_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_06}
            cell_day_time={"sexta_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_06}
            cell_day_time={"sabado_06"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_06}
            cell_day_time={"domingo_06"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>08h-10h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_08}
            cell_day_time={"segunda_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_08}
            cell_day_time={"terca_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_08}
            cell_day_time={"quarta_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_08}
            cell_day_time={"quinta_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_08}
            cell_day_time={"sexta_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_08}
            cell_day_time={"sabado_08"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_08}
            cell_day_time={"domingo_08"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>10h-12h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_10}
            cell_day_time={"segunda_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_10}
            cell_day_time={"terca_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_10}
            cell_day_time={"quarta_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_10}
            cell_day_time={"quinta_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_10}
            cell_day_time={"sexta_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_10}
            cell_day_time={"sabado_10"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_10}
            cell_day_time={"domingo_10"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>12h-14h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_12}
            cell_day_time={"segunda_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_12}
            cell_day_time={"terca_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_12}
            cell_day_time={"quarta_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_12}
            cell_day_time={"quinta_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_12}
            cell_day_time={"sexta_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_12}
            cell_day_time={"sabado_12"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_12}
            cell_day_time={"domingo_12"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>14h-16h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_14}
            cell_day_time={"segunda_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_14}
            cell_day_time={"terca_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_14}
            cell_day_time={"quarta_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_14}
            cell_day_time={"quinta_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_14}
            cell_day_time={"sexta_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_14}
            cell_day_time={"sabado_14"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_14}
            cell_day_time={"domingo_14"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>16h-18h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_16}
            cell_day_time={"segunda_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_16}
            cell_day_time={"terca_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_16}
            cell_day_time={"quarta_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_16}
            cell_day_time={"quinta_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_16}
            cell_day_time={"sexta_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_16}
            cell_day_time={"sabado_16"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_16}
            cell_day_time={"domingo_16"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>18h-20h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_18}
            cell_day_time={"segunda_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_18}
            cell_day_time={"terca_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_18}
            cell_day_time={"quarta_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_18}
            cell_day_time={"quinta_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_18}
            cell_day_time={"sexta_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_18}
            cell_day_time={"sabado_18"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_18}
            cell_day_time={"domingo_18"}
          ></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>20h-22h</HeaderSpan>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.segunda_20}
            cell_day_time={"segunda_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.terca_20}
            cell_day_time={"terca_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quarta_20}
            cell_day_time={"quarta_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.quinta_20}
            cell_day_time={"quinta_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sexta_20}
            cell_day_time={"sexta_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.sabado_20}
            cell_day_time={"sabado_20"}
          ></Cell>
        </Column>
        <Column>
          <Cell
            isFriendCell={true}
            friendWebId={friendWebId}
            availability={agenda.domingo_20}
            cell_day_time={"domingo_20"}
          ></Cell>
        </Column>
      </CellRow>
      <CaptionRow>
        <CaptionWrapper>
          <CaptionCell $status={0} />
          <CaptionLabel>Indisponível</CaptionLabel>
        </CaptionWrapper>
        <CaptionWrapper>
          <CaptionCell $status={1} />
          <CaptionLabel>Livre</CaptionLabel>
        </CaptionWrapper>
        <CaptionWrapper>
          <CaptionCell $status={3} />
          <CaptionLabel>Ocupado</CaptionLabel>
        </CaptionWrapper>
      </CaptionRow>
    </AgendaArea>
  );
}
