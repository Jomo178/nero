"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { avatar, DiscordUser } from "@/utils/types";
import Loading from "../../app/loader";

interface ContextProps {
  data: DiscordUser | null;
  setData: Dispatch<SetStateAction<DiscordUser | null>>;
}

const GlobalContext = createContext<ContextProps>({
  data: null,
  setData: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [data, setData] = useState<DiscordUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch(`/api/users/@me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: "POST",
          });
          if (response.ok) {
            const {
              userData,
              botData,
            }: {
              userData?: DiscordUser;
              botData: DiscordUser;
            } = await response.json();
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
