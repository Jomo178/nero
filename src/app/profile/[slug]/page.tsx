import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import ProfileBody from "@/src/components/profile/body";
import ProfileHeader from "@/src/components/profile/header";
import { prisma } from "@/src/lib/db";

interface callbackParams {
  params: {
    slug: string;
  };
}

async function generateStaticParams(): Promise<callbackParams["params"][]> {
  const getUsers = await prisma.user.findMany();

  return getUsers.map((user) => ({
    slug: user.authorId,
  }));
}

const Home = ({ params }: callbackParams) => {
  const slug = params.slug;

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
