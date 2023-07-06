"use client";

import Footer from "@/components/footer";
import SectionOne from "@/components/home/sectionOne";
import SectionTwo from "@/components/home/sectionTwo";
import Navbar from "@/components/navbar";

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
