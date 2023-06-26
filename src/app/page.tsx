"use client";
import { createContext, useState, useEffect } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";
import { users_discord_info_obj } from "@/utils/types";
import Loading from "./loader";

export const UserContext = createContext<any>([null, () => {}]);

export default function Home() {
  const [userData, setUserData] = useState<users_discord_info_obj | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`https://discord.com/api/v10/users/@me`, {
        headers: {
          Authorization: `Bearer gOwJKiOYPWVEOBh1zKqYS4dK6hSB3F`,
        },
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else setLoading(false);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
    </UserContext.Provider>
  );
}
