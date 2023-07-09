"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { DiscordUser } from "@/src/types";

import Loading from "../app/loader";

interface ContextProps {
  data: {
    user: DiscordUser | undefined;
    bot: DiscordUser;
  };
  setData: Dispatch<SetStateAction<ContextProps["data"]>>;
}

const GlobalContext = createContext<ContextProps>({
  data: { user: undefined, bot: {} as DiscordUser },
  setData: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [data, setData] = useState<ContextProps["data"]>({
    user: undefined,
    bot: {} as DiscordUser,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`/api/users/@me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "POST",
        });
        if (response.ok) {
          const { user, bot } = await response.json();

          setData({ user, bot });
        }
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
