import Fetcher from "./fetcher";

export const auth = (
  mode: "signin | signup",
  body: { email: string; password: string }
) => {
  return Fetcher(`/${mode}`, body);
};
