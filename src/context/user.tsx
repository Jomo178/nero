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
    console.log(data);
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token && (!data.user || !data.bot)) {
          const response = await fetch(`/api/users/@me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: "POST",
          });
          if (response.ok) {
            const { user, bot } = await response.json();

            console.log("fetch data one");

            setData({ user, bot });
          } else {
            localStorage.removeItem("token");
          }
        }
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data.user, data.bot]);

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
