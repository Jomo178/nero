"use client";
import { createContext, useState, useEffect } from "react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";

export const UserContext = createContext(null);

export default function Home() {
  const [userData, setUserData] = useState(null);

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
        .then((data) => console.log(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }

    console.log(userData);
  }, []);

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar></Navbar>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <Footer></Footer>
      </UserContext.Provider>
    </>
  );
}
