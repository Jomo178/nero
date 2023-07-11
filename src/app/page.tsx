import Footer from "@/src/components/footer";
import SectionOne from "@/src/components/home/sectionOne";
import SectionTwo from "@/src/components/home/sectionTwo";
import Navbar from "@/src/components/navbar";

import { prisma } from "../lib/db";

const testFunction = async (test: any) => {
  console.log(test);
  const users = await prisma.user.findMany();

  console.log(users);
  return;
};

export default async function Home() {
  const token = localStorage.getItem("token");
  const testss = await testFunction(token);
  return (
    <>
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <Footer></Footer>
    </>
  );
}
