"use client";
import Footer from "@/components/lib/footer";
import Navbar from "@/components/lib/navbar";
import SectionOne from "@/components/home/sectionOne";
import SectionTwo from "@/components/home/sectionTwo";

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
