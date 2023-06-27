"use client";
import Footer from "@/components/lib/footer";
import Navbar from "@/components/lib/navbar";

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
      <Footer></Footer>
    </>
  );
};

export default Home;
