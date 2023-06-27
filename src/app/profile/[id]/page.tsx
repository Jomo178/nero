"use client";
import Footer from "@/components/lib/footer";
import Navbar from "@/components/lib/navbar";
import { UserContext } from "@/app/page";
import { useContext } from "react";

interface callbackParams {
  params: {
    id: string | undefined;
  };
}

const Page = ({ params }: callbackParams) => {
  const id = params.id;
  const idk = useContext(UserContext);

  console.log(idk);

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  );
};

export default Page;
