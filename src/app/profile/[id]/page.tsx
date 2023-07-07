"use client";

import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import ProfileBody from "@/src/components/profile/body";
import ProfileHeader from "@/src/components/profile/header";

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
