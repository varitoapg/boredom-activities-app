import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./settings";
const cookieName = "i18next";

acceptLanguage.languages(languages);

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() ?? null;
  }
  return null;
}

export function detectLanguage(): string {
  let language = getCookie(cookieName);

  if (language) {
    language = acceptLanguage.get(language);
  }

  if (!language) {
    language = acceptLanguage.get(navigator.language);
  }

  if (!language) {
    language = fallbackLng;
  }

  return language;
}
