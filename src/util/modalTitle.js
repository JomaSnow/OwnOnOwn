export function getModalTitleFromCellDayTime(cell_day_time) {
  let title = "Carregando...";
  switch (cell_day_time) {
    case "segunda_06":
      title = "Segunda-Feira, 06h-08h";
      break;

    case "segunda_08":
      title = "Segunda-Feira, 08h-10h";
      break;

    case "segunda_10":
      title = "Segunda-Feira, 10h-12h";
      break;

    case "segunda_12":
      title = "Segunda-Feira, 12h-14h";
      break;

    case "segunda_14":
      title = "Segunda-Feira, 14h-16h";
      break;

    case "segunda_16":
      title = "Segunda-Feira, 16h-18h";
      break;

    case "segunda_18":
      title = "Segunda-Feira, 18h-20h";
      break;

    case "segunda_20":
      title = "Segunda-Feira, 20h-22h";
      break;

    case "segunda_22":
      title = "Segunda-Feira, 22h-00h";
      break;

    case "terca_06":
      title = "Terça-Feira, 06h-08h";
      break;

    case "terca_08":
      title = "Terça-Feira, 08h-10h";
      break;

    case "terca_10":
      title = "Terça-Feira, 10h-12h";
      break;

    case "terca_12":
      title = "Terça-Feira, 12h-14h";
      break;

    case "terca_14":
      title = "Terça-Feira, 14h-16h";
      break;

    case "terca_16":
      title = "Terça-Feira, 16h-18h";
      break;

    case "terca_18":
      title = "Terça-Feira, 18h-20h";
      break;

    case "terca_20":
      title = "Terça-Feira, 20h-22h";
      break;

    case "terca_22":
      title = "Terça-Feira, 22h-00h";
      break;

    case "quarta_06":
      title = "Quarta-Feira, 06h-08h";
      break;

    case "quarta_08":
      title = "Quarta-Feira, 08h-10h";
      break;

    case "quarta_10":
      title = "Quarta-Feira, 10h-12h";
      break;

    case "quarta_12":
      title = "Quarta-Feira, 12h-14h";
      break;

    case "quarta_14":
      title = "Quarta-Feira, 14h-16h";
      break;

    case "quarta_16":
      title = "Quarta-Feira, 16h-18h";
      break;

    case "quarta_18":
      title = "Quarta-Feira, 18h-20h";
      break;

    case "quarta_20":
      title = "Quarta-Feira, 20h-22h";
      break;

    case "quarta_22":
      title = "Quarta-Feira, 22h-00h";
      break;

    case "quinta_06":
      title = "Quinta-Feira, 06h-08h";
      break;

    case "quinta_08":
      title = "Quinta-Feira, 08h-10h";
      break;

    case "quinta_10":
      title = "Quinta-Feira, 10h-12h";
      break;

    case "quinta_12":
      title = "Quinta-Feira, 12h-14h";
      break;

    case "quinta_14":
      title = "Quinta-Feira, 14h-16h";
      break;

    case "quinta_16":
      title = "Quinta-Feira, 16h-18h";
      break;

    case "quinta_18":
      title = "Quinta-Feira, 18h-20h";
      break;

    case "quinta_20":
      title = "Quinta-Feira, 20h-22h";
      break;

    case "quinta_22":
      title = "Quinta-Feira, 22h-00h";
      break;

    case "sexta_06":
      title = "Sexta-Feira, 06h-08h";
      break;

    case "sexta_08":
      title = "Sexta-Feira, 08h-10h";
      break;

    case "sexta_10":
      title = "Sexta-Feira, 10h-12h";
      break;

    case "sexta_12":
      title = "Sexta-Feira, 12h-14h";
      break;

    case "sexta_14":
      title = "Sexta-Feira, 14h-16h";
      break;

    case "sexta_16":
      title = "Sexta-Feira, 16h-18h";
      break;

    case "sexta_18":
      title = "Sexta-Feira, 18h-20h";
      break;

    case "sexta_20":
      title = "Sexta-Feira, 20h-22h";
      break;

    case "sexta_22":
      title = "Sexta-Feira, 22h-00h";
      break;

    case "sabado_06":
      title = "Sábado, 06h-08h";
      break;

    case "sabado_08":
      title = "Sábado, 08h-10h";
      break;

    case "sabado_10":
      title = "Sábado, 10h-12h";
      break;

    case "sabado_12":
      title = "Sábado, 12h-14h";
      break;

    case "sabado_14":
      title = "Sábado, 14h-16h";
      break;

    case "sabado_16":
      title = "Sábado, 16h-18h";
      break;

    case "sabado_18":
      title = "Sábado, 18h-20h";
      break;

    case "sabado_20":
      title = "Sábado, 20h-22h";
      break;

    case "sabado_22":
      title = "Sábado, 22h-00h";
      break;

    case "domingo_06":
      title = "Domingo, 06h-08h";
      break;

    case "domingo_08":
      title = "Domingo, 08h-10h";
      break;

    case "domingo_10":
      title = "Domingo, 10h-12h";
      break;

    case "domingo_12":
      title = "Domingo, 12h-14h";
      break;

    case "domingo_14":
      title = "Domingo, 14h-16h";
      break;

    case "domingo_16":
      title = "Domingo, 16h-18h";
      break;

    case "domingo_18":
      title = "Domingo, 18h-20h";
      break;

    case "domingo_20":
      title = "Domingo, 20h-22h";
      break;

    case "domingo_22":
      title = "Domingo, 22h-00h";
      break;

    default:
      title = "Dia, Hora";
      break;
  }

  return title;
}
