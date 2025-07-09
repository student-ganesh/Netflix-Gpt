export const NET_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR_URL =
  "https://avatars.githubusercontent.com/u/161746902?v=4";

export const DEF_AVATAR =
  "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg";

export const SUPPORTED_LANG = [
  { identifier: "marathi", name: "Marathi" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "en", name: "English" },
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;
