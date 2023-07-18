/* eslint eqeqeq: "off" */

import {
  getPodUrlAll,
  overwriteFile,
  getFile,
  getSolidDataset,
  getThing,
  getUrlAll,
  buildThing,
  setThing,
  saveSolidDatasetAt,
  getLiteral,
} from "@inrupt/solid-client";
import { fetch, getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { FOAF, VCARD } from "@inrupt/vocab-common-rdf";
import { v4 as uuidv4 } from "uuid";

// Para agenda do usuário não passa webId, para de algum amigo passa.
export async function getAgenda(webId, compromissosArr) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/agenda.json";

  try {
    const agenda = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(agenda).text();

    const json = JSON.parse(blob);

    let currentAgenda = { ...json };

    if (!webId) {
      let hadChanges = 0;

      //sync / reset agenda in case compromissos are deleted before agenda can be update (i.e. auto deleted after some weeks)
      if (
        currentAgenda["segunda_06"] === 2 ||
        currentAgenda["segunda_06"] === 3
      ) {
        currentAgenda["segunda_06"] = 1;
      }
      if (
        currentAgenda["segunda_08"] === 2 ||
        currentAgenda["segunda_08"] === 3
      ) {
        currentAgenda["segunda_08"] = 1;
      }
      if (
        currentAgenda["segunda_10"] === 2 ||
        currentAgenda["segunda_10"] === 3
      ) {
        currentAgenda["segunda_10"] = 1;
      }
      if (
        currentAgenda["segunda_12"] === 2 ||
        currentAgenda["segunda_12"] === 3
      ) {
        currentAgenda["segunda_12"] = 1;
      }
      if (
        currentAgenda["segunda_14"] === 2 ||
        currentAgenda["segunda_14"] === 3
      ) {
        currentAgenda["segunda_14"] = 1;
      }
      if (
        currentAgenda["segunda_16"] === 2 ||
        currentAgenda["segunda_16"] === 3
      ) {
        currentAgenda["segunda_16"] = 1;
      }
      if (
        currentAgenda["segunda_18"] === 2 ||
        currentAgenda["segunda_18"] === 3
      ) {
        currentAgenda["segunda_18"] = 1;
      }
      if (
        currentAgenda["segunda_20"] === 2 ||
        currentAgenda["segunda_20"] === 3
      ) {
        currentAgenda["segunda_20"] = 1;
      }
      if (
        currentAgenda["segunda_22"] === 2 ||
        currentAgenda["segunda_22"] === 3
      ) {
        currentAgenda["segunda_22"] = 1;
      }
      if (currentAgenda["terca_06"] === 2 || currentAgenda["terca_06"] === 3) {
        currentAgenda["terca_06"] = 1;
      }
      if (currentAgenda["terca_08"] === 2 || currentAgenda["terca_08"] === 3) {
        currentAgenda["terca_08"] = 1;
      }
      if (currentAgenda["terca_10"] === 2 || currentAgenda["terca_10"] === 3) {
        currentAgenda["terca_10"] = 1;
      }
      if (currentAgenda["terca_12"] === 2 || currentAgenda["terca_12"] === 3) {
        currentAgenda["terca_12"] = 1;
      }
      if (currentAgenda["terca_14"] === 2 || currentAgenda["terca_14"] === 3) {
        currentAgenda["terca_14"] = 1;
      }
      if (currentAgenda["terca_16"] === 2 || currentAgenda["terca_16"] === 3) {
        currentAgenda["terca_16"] = 1;
      }
      if (currentAgenda["terca_18"] === 2 || currentAgenda["terca_18"] === 3) {
        currentAgenda["terca_18"] = 1;
      }
      if (currentAgenda["terca_20"] === 2 || currentAgenda["terca_20"] === 3) {
        currentAgenda["terca_20"] = 1;
      }
      if (currentAgenda["terca_22"] === 2 || currentAgenda["terca_22"] === 3) {
        currentAgenda["terca_22"] = 1;
      }
      if (
        currentAgenda["quarta_06"] === 2 ||
        currentAgenda["quarta_06"] === 3
      ) {
        currentAgenda["quarta_06"] = 1;
      }
      if (
        currentAgenda["quarta_08"] === 2 ||
        currentAgenda["quarta_08"] === 3
      ) {
        currentAgenda["quarta_08"] = 1;
      }
      if (
        currentAgenda["quarta_10"] === 2 ||
        currentAgenda["quarta_10"] === 3
      ) {
        currentAgenda["quarta_10"] = 1;
      }
      if (
        currentAgenda["quarta_12"] === 2 ||
        currentAgenda["quarta_12"] === 3
      ) {
        currentAgenda["quarta_12"] = 1;
      }
      if (
        currentAgenda["quarta_14"] === 2 ||
        currentAgenda["quarta_14"] === 3
      ) {
        currentAgenda["quarta_14"] = 1;
      }
      if (
        currentAgenda["quarta_16"] === 2 ||
        currentAgenda["quarta_16"] === 3
      ) {
        currentAgenda["quarta_16"] = 1;
      }
      if (
        currentAgenda["quarta_18"] === 2 ||
        currentAgenda["quarta_18"] === 3
      ) {
        currentAgenda["quarta_18"] = 1;
      }
      if (
        currentAgenda["quarta_20"] === 2 ||
        currentAgenda["quarta_20"] === 3
      ) {
        currentAgenda["quarta_20"] = 1;
      }
      if (
        currentAgenda["quarta_22"] === 2 ||
        currentAgenda["quarta_22"] === 3
      ) {
        currentAgenda["quarta_22"] = 1;
      }
      if (
        currentAgenda["quinta_06"] === 2 ||
        currentAgenda["quinta_06"] === 3
      ) {
        currentAgenda["quinta_06"] = 1;
      }
      if (
        currentAgenda["quinta_08"] === 2 ||
        currentAgenda["quinta_08"] === 3
      ) {
        currentAgenda["quinta_08"] = 1;
      }
      if (
        currentAgenda["quinta_10"] === 2 ||
        currentAgenda["quinta_10"] === 3
      ) {
        currentAgenda["quinta_10"] = 1;
      }
      if (
        currentAgenda["quinta_12"] === 2 ||
        currentAgenda["quinta_12"] === 3
      ) {
        currentAgenda["quinta_12"] = 1;
      }
      if (
        currentAgenda["quinta_14"] === 2 ||
        currentAgenda["quinta_14"] === 3
      ) {
        currentAgenda["quinta_14"] = 1;
      }
      if (
        currentAgenda["quinta_16"] === 2 ||
        currentAgenda["quinta_16"] === 3
      ) {
        currentAgenda["quinta_16"] = 1;
      }
      if (
        currentAgenda["quinta_18"] === 2 ||
        currentAgenda["quinta_18"] === 3
      ) {
        currentAgenda["quinta_18"] = 1;
      }
      if (
        currentAgenda["quinta_20"] === 2 ||
        currentAgenda["quinta_20"] === 3
      ) {
        currentAgenda["quinta_20"] = 1;
      }
      if (
        currentAgenda["quinta_22"] === 2 ||
        currentAgenda["quinta_22"] === 3
      ) {
        currentAgenda["quinta_22"] = 1;
      }
      if (currentAgenda["sexta_06"] === 2 || currentAgenda["sexta_06"] === 3) {
        currentAgenda["sexta_06"] = 1;
      }
      if (currentAgenda["sexta_08"] === 2 || currentAgenda["sexta_08"] === 3) {
        currentAgenda["sexta_08"] = 1;
      }
      if (currentAgenda["sexta_10"] === 2 || currentAgenda["sexta_10"] === 3) {
        currentAgenda["sexta_10"] = 1;
      }
      if (currentAgenda["sexta_12"] === 2 || currentAgenda["sexta_12"] === 3) {
        currentAgenda["sexta_12"] = 1;
      }
      if (currentAgenda["sexta_14"] === 2 || currentAgenda["sexta_14"] === 3) {
        currentAgenda["sexta_14"] = 1;
      }
      if (currentAgenda["sexta_16"] === 2 || currentAgenda["sexta_16"] === 3) {
        currentAgenda["sexta_16"] = 1;
      }
      if (currentAgenda["sexta_18"] === 2 || currentAgenda["sexta_18"] === 3) {
        currentAgenda["sexta_18"] = 1;
      }
      if (currentAgenda["sexta_20"] === 2 || currentAgenda["sexta_20"] === 3) {
        currentAgenda["sexta_20"] = 1;
      }
      if (currentAgenda["sexta_22"] === 2 || currentAgenda["sexta_22"] === 3) {
        currentAgenda["sexta_22"] = 1;
      }
      if (
        currentAgenda["sabado_06"] === 2 ||
        currentAgenda["sabado_06"] === 3
      ) {
        currentAgenda["sabado_06"] = 1;
      }
      if (
        currentAgenda["sabado_08"] === 2 ||
        currentAgenda["sabado_08"] === 3
      ) {
        currentAgenda["sabado_08"] = 1;
      }
      if (
        currentAgenda["sabado_10"] === 2 ||
        currentAgenda["sabado_10"] === 3
      ) {
        currentAgenda["sabado_10"] = 1;
      }
      if (
        currentAgenda["sabado_12"] === 2 ||
        currentAgenda["sabado_12"] === 3
      ) {
        currentAgenda["sabado_12"] = 1;
      }
      if (
        currentAgenda["sabado_14"] === 2 ||
        currentAgenda["sabado_14"] === 3
      ) {
        currentAgenda["sabado_14"] = 1;
      }
      if (
        currentAgenda["sabado_16"] === 2 ||
        currentAgenda["sabado_16"] === 3
      ) {
        currentAgenda["sabado_16"] = 1;
      }
      if (
        currentAgenda["sabado_18"] === 2 ||
        currentAgenda["sabado_18"] === 3
      ) {
        currentAgenda["sabado_18"] = 1;
      }
      if (
        currentAgenda["sabado_20"] === 2 ||
        currentAgenda["sabado_20"] === 3
      ) {
        currentAgenda["sabado_20"] = 1;
      }
      if (
        currentAgenda["sabado_22"] === 2 ||
        currentAgenda["sabado_22"] === 3
      ) {
        currentAgenda["sabado_22"] = 1;
      }
      if (
        currentAgenda["domingo_06"] === 2 ||
        currentAgenda["domingo_06"] === 3
      ) {
        currentAgenda["domingo_06"] = 1;
      }
      if (
        currentAgenda["domingo_08"] === 2 ||
        currentAgenda["domingo_08"] === 3
      ) {
        currentAgenda["domingo_08"] = 1;
      }
      if (
        currentAgenda["domingo_10"] === 2 ||
        currentAgenda["domingo_10"] === 3
      ) {
        currentAgenda["domingo_10"] = 1;
      }
      if (
        currentAgenda["domingo_12"] === 2 ||
        currentAgenda["domingo_12"] === 3
      ) {
        currentAgenda["domingo_12"] = 1;
      }
      if (
        currentAgenda["domingo_14"] === 2 ||
        currentAgenda["domingo_14"] === 3
      ) {
        currentAgenda["domingo_14"] = 1;
      }
      if (
        currentAgenda["domingo_16"] === 2 ||
        currentAgenda["domingo_16"] === 3
      ) {
        currentAgenda["domingo_16"] = 1;
      }
      if (
        currentAgenda["domingo_18"] === 2 ||
        currentAgenda["domingo_18"] === 3
      ) {
        currentAgenda["domingo_18"] = 1;
      }
      if (
        currentAgenda["domingo_20"] === 2 ||
        currentAgenda["domingo_20"] === 3
      ) {
        currentAgenda["domingo_20"] = 1;
      }
      if (
        currentAgenda["domingo_22"] === 2 ||
        currentAgenda["domingo_22"] === 3
      ) {
        currentAgenda["domingo_22"] = 1;
      }

      for (const comp of compromissosArr) {
        if (comp.status === 0 || comp.status === 4) {
          hadChanges++;
          currentAgenda = await updateAgenda({
            day_time: comp.day_time,
            status: 2,
            currentAgenda: currentAgenda,
          });
        }
        if (comp.status === 2 || comp.status === 3) {
          hadChanges++;

          const compsOnSameDay = [];

          for (const sameDayComp of compromissosArr) {
            if (
              sameDayComp.day_time === comp.day_time &&
              comp.id !== sameDayComp.id
            ) {
              compsOnSameDay.push(sameDayComp);
            }
          }

          let noOtherValidCompsOnSameDay = true;

          for (const sameDayComp of compsOnSameDay) {
            if (sameDayComp.status !== 2 || sameDayComp.status !== 3) {
              noOtherValidCompsOnSameDay = false;
            }
          }

          if (noOtherValidCompsOnSameDay) {
            currentAgenda = await updateAgenda({
              day_time: comp.day_time,
              status: 1,
              currentAgenda: currentAgenda,
            });
          }
        }
        if (comp.status === 1) {
          hadChanges++;
          currentAgenda = await updateAgenda({
            day_time: comp.day_time,
            status: 3,
            currentAgenda: currentAgenda,
          });
        }
      }

      if (hadChanges > 0) {
        currentAgenda = await updateAgenda({
          updateEverything: true,
          updatedAgenda: currentAgenda,
        });
      }
    }

    return currentAgenda;
  } catch (e) {
    if (e.message.includes("404")) {
      if (!webId) {
        return await updateAgenda({ updateEverything: true });
      } else {
        console.error("Este amigo ainda não utiliza Tutor.");
        console.error(e);
        return null;
      }
    } else {
      console.error("Ocorreu um erro no getAgenda.");
      console.error(e);
      throw new Error(e);
    }
  }
}

export async function deleteCompromisso(comp, compromissos) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/compromissos.json";

  const fileArr = compromissos.filter((c) => {
    return c.id != comp.id;
  });

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
    return fileArr;
  } catch (e) {
    if (e.message.includes("Cannot assign to read only")) {
      console.warn(e);
      return fileArr;
    } else {
      console.error(e);
      return compromissos;
    }
  }
}

// Para compromissos do usuário não passa webId, para de algum amigo passa.
export async function getCompromissos(webId, friendsArr) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/compromissos.json";

  try {
    const agenda = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(agenda).text();

    const json = JSON.parse(blob);

    const dateNow = Date.now();

    const ONE_WEEK_IN_MILLI = 604800000;

    // delete cancelled after 1 week or any appointment after 1 month
    let jsonAfterDeletion = json;

    for (const comp of json) {
      if (comp.status === 2 || comp.status === 3) {
        if (dateNow > comp.updated_at + ONE_WEEK_IN_MILLI) {
          jsonAfterDeletion = await deleteCompromisso(comp, jsonAfterDeletion);
        }
      } else {
        if (dateNow > comp.updated_at + ONE_WEEK_IN_MILLI * 4) {
          jsonAfterDeletion = await deleteCompromisso(comp, jsonAfterDeletion);
        }
      }
    }

    let jsonAfterFriendsCheck = [...jsonAfterDeletion];
    // check friends responses on existing compromissos only for current user
    if (!webId && friendsArr) {
      for (const friend of friendsArr) {
        const friendsCompromissos = friend.compromissos;
        const friendWebId = friend.friendWebId;

        // first match compromissos
        for (const fComp of friendsCompromissos) {
          // case 1: friend requested compromisso (addCompromisso with status 4)
          if (fComp.friend_pod_url === id && fComp.status === 0) {
            const newComp = {
              day_time: fComp.day_time,
              friend_pod_url: friendWebId,
            };
            await addCompromisso(newComp, 4, jsonAfterFriendsCheck);
          }
          for (const comp of jsonAfterDeletion) {
            // case 2: friend cancelled compromisso (updateCompromisso with status 3)
            if (
              fComp.friend_pod_url === id &&
              comp.friend_pod_url === friendWebId &&
              fComp.day_time === comp.day_time &&
              fComp.status === 2
            ) {
              jsonAfterFriendsCheck = await updateCompromisso(
                comp,
                3,
                jsonAfterFriendsCheck
              );
            }
            // case 3: friend confirmed compromisso (updateCompromisso with status 1)
            if (
              fComp.friend_pod_url === id &&
              comp.friend_pod_url === friendWebId &&
              fComp.day_time === comp.day_time &&
              fComp.status === 1
            ) {
              jsonAfterFriendsCheck = await updateCompromisso(
                comp,
                1,
                jsonAfterFriendsCheck
              );
            }
          }
        }
      }
    }

    return jsonAfterFriendsCheck;
  } catch (e) {
    if (e.message.includes("404")) {
      if (!webId) {
        const initialArr = [];
        await addCompromisso({}, 0, initialArr);
        await deleteCompromisso(initialArr[0], initialArr);
        return getCompromissos(webId, friendsArr);
      }
      return [];
    } else {
      console.error("Ocorreu um erro no getCompromissos.");
      console.error(e);
      throw new Error(e);
    }
  }
}

export async function addCompromisso(compromisso, status = 0, compromissos) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/compromissos.json";

  const compromissosArr = compromissos;

  for (const comp of compromissosArr) {
    if (
      comp.day_time === compromisso.day_time &&
      comp.friend_pod_url === compromisso.friend_pod_url &&
      (comp.status === 0 || comp.status === 1 || comp.status === 4)
    ) {
      return compromissos;
    }
  }

  compromissosArr.push({
    ...compromisso,
    status: status,
    updated_at: Date.now(),
    id: uuidv4(),
  });

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(compromissosArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
    return compromissosArr;
  } catch (error) {
    if (error.message.includes("Cannot assign to read only")) {
      console.warn(error);
      return compromissosArr;
    } else {
      console.error(error);
      return compromissos;
    }
  }
}

export async function updateCompromisso(compromisso, status, compromissosArr) {
  let notFound = 0;

  for (const comp of compromissosArr) {
    if (
      comp.day_time !== compromisso.day_time ||
      comp.friend_pod_url !== compromisso.friend_pod_url
    ) {
      notFound++;
    }
  }

  if (notFound === compromissosArr.length) {
    return compromissosArr;
  }

  const arrAfterDeletion = await deleteCompromisso(
    compromisso,
    compromissosArr
  );
  await addCompromisso(compromisso, status, arrAfterDeletion);

  return arrAfterDeletion;
}

// Somente persiste no POD quando atualiza a agenda inteira, senao retorna atualizações locais
export async function updateAgenda({
  currentAgenda,
  updateEverything = false,
  updatedAgenda = null,
  day_time,
  status,
}) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/agenda.json";

  const dateNow = Date.now();

  let newAgenda = {
    updated_at: dateNow,
    segunda_06: 0,
    segunda_08: 0,
    segunda_10: 0,
    segunda_12: 0,
    segunda_14: 0,
    segunda_16: 0,
    segunda_18: 0,
    segunda_20: 0,
    segunda_22: 0,
    terca_06: 0,
    terca_08: 0,
    terca_10: 0,
    terca_12: 0,
    terca_14: 0,
    terca_16: 0,
    terca_18: 0,
    terca_20: 0,
    terca_22: 0,
    quarta_06: 0,
    quarta_08: 0,
    quarta_10: 0,
    quarta_12: 0,
    quarta_14: 0,
    quarta_16: 0,
    quarta_18: 0,
    quarta_20: 0,
    quarta_22: 0,
    quinta_06: 0,
    quinta_08: 0,
    quinta_10: 0,
    quinta_12: 0,
    quinta_14: 0,
    quinta_16: 0,
    quinta_18: 0,
    quinta_20: 0,
    quinta_22: 0,
    sexta_06: 0,
    sexta_08: 0,
    sexta_10: 0,
    sexta_12: 0,
    sexta_14: 0,
    sexta_16: 0,
    sexta_18: 0,
    sexta_20: 0,
    sexta_22: 0,
    sabado_06: 0,
    sabado_08: 0,
    sabado_10: 0,
    sabado_12: 0,
    sabado_14: 0,
    sabado_16: 0,
    sabado_18: 0,
    sabado_20: 0,
    sabado_22: 0,
    domingo_06: 0,
    domingo_08: 0,
    domingo_10: 0,
    domingo_12: 0,
    domingo_14: 0,
    domingo_16: 0,
    domingo_18: 0,
    domingo_20: 0,
    domingo_22: 0,
  };

  try {
    if (!updateEverything) {
      if (currentAgenda[day_time] === status) {
        // no need to update, can return
        return currentAgenda;
      }

      newAgenda = currentAgenda;
      newAgenda[day_time] = status;
      return newAgenda;
    } else {
      if (!updatedAgenda) {
        console.warn("updatedAgenda is null. Reseting Agenda");
      } else {
        newAgenda = updatedAgenda;
        newAgenda.updated_at = dateNow;
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(newAgenda), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
    return newAgenda;
  } catch (error) {
    if (error.message.includes("Cannot assign to read only")) {
      console.warn(error);
      return newAgenda;
    } else {
      console.error(error);
    }
  }
}

export async function getLikedMeals(webId) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/ruview/likedMeals.json";

  try {
    const likedMeals = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(likedMeals).text();

    const json = JSON.parse(blob);

    return json;
  } catch (e) {
    if (e.message.includes("404")) {
      return [];
    }
    console.error("Ocorreu um erro no getLikedMeals.");
    console.error(e);
    throw new Error(e);
  }
}

/*Funções de amigos*/
////////////////////////////////////////////////////////////////////////////////////////////////////
export async function isValidFriendWebId(webId) {
  try {
    const friendDataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

    const friendThing = getThing(friendDataSet, webId); // :me thing ()

    if (friendThing !== null) {
      return true;
    } else {
      window.alert("URL de amigo inválido");
      return false;
    }
  } catch (e) {
    console.error(e);
    window.alert("URL de amigo inválido");
    return false;
  }
}

export async function getSolidFriends() {
  const webId = getDefaultSession().info.webId;
  const dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  const thing = getThing(dataSet, webId); // :me thing ()

  const friendsObjArr = [];

  try {
    const currentFriendsUrl = getUrlAll(thing, FOAF.knows);

    for (const url of currentFriendsUrl) {
      const friendDataSet = await getSolidDataset(url, { fetch: fetch });

      const friendThing = getThing(friendDataSet, url);

      const nome = getLiteral(friendThing, FOAF.name).value;
      const friendWebId = url;
      const agenda = await getAgenda(url);
      const likedMeals = await getLikedMeals(url);
      const compromissos = await getCompromissos(url, null);

      const friendObj = { nome, friendWebId, agenda, compromissos, likedMeals };

      friendsObjArr.push(friendObj);
    }

    return friendsObjArr;
  } catch (error) {
    console.error(error);
    throw new Error("Ocorreu um erro");
  }
}

export async function addSolidFriend(friendWebID) {
  const webId = getDefaultSession().info.webId;
  let dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  let thing = getThing(dataSet, webId); // :me thing ()

  try {
    let currentFriendsUrl = getUrlAll(thing, FOAF.knows);

    if (currentFriendsUrl.some((url) => url === friendWebID)) {
      window.alert("Vocês já são amigos");
      return "Vocês já são amigos";
    } else {
      // Check if valid URL
      if (!(await isValidFriendWebId(friendWebID))) {
        return "Não é uma URL de amigo válida.";
      }

      // Friend as thing
      let newFriend = buildThing(thing).addUrl(FOAF.knows, friendWebID).build();

      // insert friend in dataset
      dataSet = setThing(dataSet, newFriend);
      dataSet = await saveSolidDatasetAt(webId, dataSet, { fetch: fetch });
      return null;
    }
  } catch (error) {
    return "Ocorreu um erro";
  }
}

export async function removeSolidFriend(friendWebID) {
  const webId = getDefaultSession().info.webId;
  let dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  let thing = getThing(dataSet, webId); // :me thing ()

  try {
    let currentFriendsUrl = getUrlAll(thing, FOAF.knows);
    if (currentFriendsUrl.every((url) => url !== friendWebID)) {
      return "Amigo não encontrado";
    } else {
      // Friend to remove
      let newFriendsAfterRemoval = buildThing(thing)
        .removeUrl(FOAF.knows, friendWebID)
        .build();

      // insert new friends in dataset
      dataSet = setThing(dataSet, newFriendsAfterRemoval);

      dataSet = await saveSolidDatasetAt(webId, dataSet, { fetch: fetch });
      return null;
    }
  } catch (error) {
    console.error(error);
    return "Ocorreu um erro";
  }
}

export async function getUserProfile() {
  const webId = getDefaultSession().info.webId;
  const dataSet = await getSolidDataset(webId, { fetch: fetch }); // dataset card

  const thing = getThing(dataSet, webId); // :me thing ()

  let profile = {};

  try {
    const userFirstName = getLiteral(thing, VCARD.fn);

    profile = { firstName: userFirstName.value };
  } catch (error) {
    console.error(error);
    if (error.message.includes("reading 'value'")) {
      try {
        const userFirstName = getLiteral(thing, FOAF.name);

        profile = { firstName: userFirstName.value };
      } catch (e) {
        console.error(e);
      }
    }
  }
  return profile;
}
