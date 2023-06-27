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
import { users_discord_info_obj } from "@/utils/types";
import Loading from "../../app/loader";

interface ContextProps {
  data: users_discord_info_obj | null;
  setData: Dispatch<SetStateAction<users_discord_info_obj | null>>;
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
  const [data, setData] = useState<users_discord_info_obj | null>(null);
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
            const data = await response.json();
            setData(data);
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
