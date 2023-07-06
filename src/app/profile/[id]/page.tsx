"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProfileBody from "@/components/profile/body";
import ProfileHeader from "@/components/profile/header";

interface callbackParams {
  params: {
    id: string | undefined;
  };
}

const Home = ({ params }: callbackParams) => {
  const id = params.id;

  return (
    <>
      <Navbar></Navbar>
      <ProfileHeader></ProfileHeader>
      <ProfileBody></ProfileBody>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
