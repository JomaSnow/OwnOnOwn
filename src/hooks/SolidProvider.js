import {
  getDefaultSession,
  handleIncomingRedirect,
} from "@inrupt/solid-client-authn-browser";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getLikedMeals, getUserProfile } from "../api/functions/solid";

const SolidContext = createContext();
const SolidUpdateContext = createContext();

export function useSolid() {
  return useContext(SolidContext);
}

export function useSolidUpdate() {
  return useContext(SolidUpdateContext);
}

export function SolidProvider({ children }) {
  const [webId, setWebId] = useState(null);
  const [userProfile, setUserProfile] = useState();
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [userLikedMeals, setUserLikedMeals] = useState([]);
  const [loadingLikedMeals, setLoadingLikedMeals] = useState(false);

  useEffect(() => {
    console.log(userLikedMeals);
  }, [userLikedMeals]);

  // setta webId
  useEffect(() => {
    async function updateWebId() {
      await handleIncomingRedirect({ restorePreviousSession: true });
      const currentWebId = getDefaultSession().info.webId;
      if (currentWebId) {
        setWebId(currentWebId);
      }
    }
    updateWebId();
  }, [webId]);

  // setta profile
  useEffect(() => {
    if (webId) {
      setLoadingProfile(true);
      getUserProfile().then((res) => {
        setUserProfile(res);
      });
      setLoadingProfile(false);
    }
  }, [webId]);

  // setta likedMeals
  useEffect(() => {
    if (webId) {
      setLoadingLikedMeals(true);
      getLikedMeals().then((res) => {
        setUserLikedMeals(res);
      });
      setLoadingLikedMeals(false);
    }
  }, [webId]);

  return (
    <SolidContext.Provider
      value={{
        webId,
        userProfile,
        loadingProfile,
        userLikedMeals,
        loadingLikedMeals,
      }}
    >
      <SolidUpdateContext.Provider value={{ setWebId }}>
        {children}
      </SolidUpdateContext.Provider>
    </SolidContext.Provider>
  );
}
