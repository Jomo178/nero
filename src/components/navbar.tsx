import Image from 'next/image'

function Navbar() {
  return (
    <>
      <nav className="">
        <div>
          <ImageAvatar src={bot.imageUrl}></ImageAvatar>
        </div>
      </nav>
    </>
  );
}

function ImageAvatar({src}:{src: string}) {
  return (<>
  <div className='rounded'>
    <Image src={src} alt='avatar' width={40} height={40}></Image>
  </div>
  </>)
}

const bot ={
  imageUrl: "https://cdn.discordapp.com/avatars/542770757382569994/fad5207a33644450890312e26a2183fb.webp?size=128",
  name: "Nero"
} 

export default Navbar;
