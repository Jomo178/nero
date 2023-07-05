"use client";
import Footer from "@/components/lib/footer";
import Navbar from "@/components/lib/navbar";
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
      <Footer></Footer>
    </>
  );
};

export default Home;
