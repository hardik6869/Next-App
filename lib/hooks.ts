import useSWR from "swr";
import Fetcher from "./fetcher";

export const useMe = () => {
  const { data, error } = useSWR("/me", Fetcher);
  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", Fetcher);
  return {
    playlistes: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
