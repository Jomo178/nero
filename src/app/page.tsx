"use client";

import Footer from "@/src/components/footer";
import SectionOne from "@/src/components/home/sectionOne";
import SectionTwo from "@/src/components/home/sectionTwo";
import Navbar from "@/src/components/navbar";

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
