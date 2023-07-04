import React from "react";
import { AgendaArea, CellRow, Column, HeaderRow, HeaderSpan } from "./styles";
import Cell from "../AgendaCell";

export default function Display() {
  return (
    <AgendaArea>
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
          <Cell availability={1} cell_day_time={"segunda_06"}></Cell>
        </Column>
        <Column>
          <Cell availability={2} cell_day_time={"terca_06"}></Cell>
        </Column>
        <Column>
          <Cell availability={3} cell_day_time={"quarta_06"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_06"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_06"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_06"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_06"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>08h-10h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_08"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_08"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>10h-12h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_10"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_10"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>12h-14h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_12"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_12"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>14h-16h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_14"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_14"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>16h-18h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_16"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_16"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>18h-20h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_18"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_18"}></Cell>
        </Column>
      </CellRow>
      <CellRow>
        <Column>
          <HeaderSpan>20h-22h</HeaderSpan>
        </Column>
        <Column>
          <Cell cell_day_time={"segunda_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"terca_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quarta_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"quinta_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sexta_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"sabado_20"}></Cell>
        </Column>
        <Column>
          <Cell cell_day_time={"domingo_20"}></Cell>
        </Column>
      </CellRow>
    </AgendaArea>
  );
}
