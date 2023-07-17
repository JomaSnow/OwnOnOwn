import {
  getDefaultSession,
  login,
  logout,
} from "@inrupt/solid-client-authn-browser";

export async function solidLogin(
  setWebIdSolidUpdateContextHook = () => {},
  podUrl
) {
  if (!getDefaultSession().info.isLoggedIn) {
    await login({
      oidcIssuer: podUrl,
      redirectUrl: window.location.href,
      clientName: "Tutor",
    });
    setWebIdSolidUpdateContextHook(getDefaultSession().info.webId);
  }
}

export async function solidLogout() {
  await logout();
  window.location.reload();
}
