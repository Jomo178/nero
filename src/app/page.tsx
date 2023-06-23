"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";

import { createContext } from "react";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
    </>
  );
}
