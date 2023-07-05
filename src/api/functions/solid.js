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
export async function getAgenda(webId) {
  let id = webId;

  if (!webId) {
    id = getDefaultSession().info.webId;
  }

  const myPods = await getPodUrlAll(id);

  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/agenda.json";

  const dateNow = Date.now();

  try {
    const agenda = await getFile(targetFileURL, { fetch: fetch });

    const blob = await new Response(agenda).text();

    const json = JSON.parse(blob);

    return json;
  } catch (e) {
    if (e.message.includes("404")) {
      if (!webId) {
        const file = {
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
          await overwriteFile(
            targetFileURL, // URL for the file.
            JSON.stringify(file), // File
            { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
          );
          return file;
        } catch (error) {
          if (error.message.includes("Cannot assign to read only")) {
            console.warn(error);
          } else {
            console.error(error);
          }
        }
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
// compromisso = {
//   id,
//   day_time,
//   friend_pod_url,
//   status, // 0- pendente, 1- confirmado, 2- cancelado por vc, 3- cancelado pelo amigo
//   updated_at,
// }
export async function getCompromissos(webId) {
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

    // delete cancelled after 1 week
    let jsonAfterDeletion = json;

    for (const comp of json) {
      if (comp.status === 2 || comp.status === 3) {
        if (dateNow > comp.updated_at + ONE_WEEK_IN_MILLI) {
          jsonAfterDeletion = await deleteCompromisso(comp, jsonAfterDeletion);
        }
      }
    }

    return jsonAfterDeletion;
  } catch (e) {
    if (e.message.includes("404")) {
      return [];
    } else {
      console.error("Ocorreu um erro no getCompromissos.");
      console.error(e);
      throw new Error(e);
    }
  }
}

export async function addCompromisso(compromisso) {
  const webId = getDefaultSession().info.webId;
  const myPods = await getPodUrlAll(webId);
  const podUrl = myPods[0];

  const targetFileURL = podUrl + "public/tutor/compromissos.json";

  const fileArr = await getCompromissos();

  for (const comp of fileArr) {
    if (
      comp.day_time === compromisso.day_time &&
      comp.friend_pod_url === compromisso.friend_pod_url
    ) {
      return;
    }
  }

  fileArr.push({
    ...compromisso,
    updated_at: Date.now(),
    id: uuidv4(),
  });

  try {
    await overwriteFile(
      targetFileURL, // URL for the file.
      JSON.stringify(fileArr), // File
      { contentType: "application/json", fetch: fetch } // mimetype if known, fetch from the authenticated session
    );
  } catch (error) {
    if (error.message.includes("Cannot assign to read only")) {
      console.warn(error);
    } else {
      console.error(error);
    }
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

      const friendObj = { nome, friendWebId, agenda };

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
      return "Vocês já são amigos";
    } else {
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
    return profile;
  } catch (error) {
    console.error(error);
    throw new Error("Ocorreu um erro");
  }
}
