import React, { useEffect, useState } from "react";
import Display from "./Display";
import { useSolid } from "../../hooks/SolidProvider";
import { usePodAgenda } from "../../hooks/PodAgendaProvider";

export default function AgendaFriendComponent({
  friend = { nome: "Amigo", agenda: null, friendWebId: "url", likedMeals: [] },
}) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [horaRefeicao, setHoraRefeicao] = useState("0");

  const { userLikedMeals } = useSolid();
  const { agenda } = usePodAgenda();

  useEffect(() => {
    function getDayTimeFromMealDayAndType(dia_refeicao, tipo_refeicao) {
      let day_time = "day_time";

      switch (dia_refeicao) {
        case 0:
          switch (tipo_refeicao) {
            case "0":
              day_time = "domingo_06";
              break;
            case "1":
              day_time = "domingo_12";
              break;
            case "2":
              day_time = "domingo_18";
              break;

            default:
              day_time = "domingo_22";
              break;
          }
          break;
        case 1:
          switch (tipo_refeicao) {
            case "0":
              day_time = "segunda_06";
              break;
            case "1":
              day_time = "segunda_12";
              break;
            case "2":
              day_time = "segunda_18";
              break;

            default:
              day_time = "segunda_22";
              break;
          }
          break;
        case 2:
          switch (tipo_refeicao) {
            case "0":
              day_time = "terca_06";
              break;
            case "1":
              day_time = "terca_12";
              break;
            case "2":
              day_time = "terca_18";
              break;

            default:
              day_time = "terca_22";
              break;
          }
          break;
        case 3:
          switch (tipo_refeicao) {
            case "0":
              day_time = "quarta_06";
              break;
            case "1":
              day_time = "quarta_12";
              break;
            case "2":
              day_time = "quarta_18";
              break;

            default:
              day_time = "quarta_22";
              break;
          }
          break;
        case 4:
          switch (tipo_refeicao) {
            case "0":
              day_time = "quinta_06";
              break;
            case "1":
              day_time = "quinta_12";
              break;
            case "2":
              day_time = "quinta_18";
              break;

            default:
              day_time = "quinta_22";
              break;
          }
          break;
        case 5:
          switch (tipo_refeicao) {
            case "0":
              day_time = "sexta_06";
              break;
            case "1":
              day_time = "sexta_12";
              break;
            case "2":
              day_time = "sexta_18";
              break;

            default:
              day_time = "sexta_22";
              break;
          }
          break;
        case 6:
          switch (tipo_refeicao) {
            case "0":
              day_time = "sabado_06";
              break;
            case "1":
              day_time = "sabado_12";
              break;
            case "2":
              day_time = "sabado_18";
              break;

            default:
              day_time = "sabado_22";
              break;
          }
          break;

        default:
          day_time = "domingo_22";
          break;
      }

      return day_time;
    }

    function compareLikedMeals() {
      const today = new Date().getDay();

      const matchedMeals = [];

      for (const meal of userLikedMeals) {
        if (today === meal.dia_refeicao) {
          for (const fMeal of friend.likedMeals) {
            if (
              meal.dia_refeicao === fMeal.dia_refeicao &&
              meal.tipo_refeicao === fMeal.tipo_refeicao
            ) {
              matchedMeals.push(meal);
            }
          }
        }
      }

      if (matchedMeals.length > 0) {
        for (const meal of matchedMeals) {
          let dia_refeicao = meal.dia_refeicao;
          let tipo_refeicao = meal.tipo_refeicao;
          let day_time = getDayTimeFromMealDayAndType(
            dia_refeicao,
            tipo_refeicao
          );

          if (
            (agenda[day_time] === 1 || agenda[day_time] === 2) &&
            (friend.agenda[day_time] === 1 || friend.agenda[day_time] === 2)
          ) {
            setShowSuggestion(true);
            setHoraRefeicao(tipo_refeicao);
          }
        }
      } else {
        setShowSuggestion(false);
      }
    }

    compareLikedMeals();
  }, [friend, userLikedMeals, agenda]);

  return (
    <Display
      nome={friend.nome}
      agenda={friend.agenda}
      friendWebId={friend.friendWebId}
      hora_refeicao={horaRefeicao}
      showSuggestion={showSuggestion}
    />
  );
}
