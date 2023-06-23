import ImageAvatar, { bot } from "./small/avatar";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-waveColor pt-16 pb-20">
        <div className="flex flex-col md:flex-row gap-14 items-start mx-14 mb-7">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex gap-2">
              <ImageAvatar src={bot.imageUrl}></ImageAvatar>
              <h6 className="text-2xl font-semibold">{bot.name}</h6>
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
              itaque veritatis distinctio sit pariatur eius velit aut assumenda
              quibusdam dolore tempore necessitatibus ut quasi. Ipsum qui
              cupiditate recusandae quaerat impedit.
            </p>
          </div>
          <div className="md:ml-8">
            <h6 className="mb-7 text-2xl font-semibold">Contact</h6>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-center hover:text-gray-500 transition-all">
                <MdEmail></MdEmail>
                <a href={`mailto:${bot.mail}`}>{bot.mail}</a>
              </li>
              <li className="flex gap-2 items-center hover:text-gray-500 transition-all">
                <FaDiscord></FaDiscord>
                <a href={bot.support}>Support Server</a>
              </li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h6 className="mb-7 text-2xl font-semibold">Social</h6>
            <ul className="flex flex-row gap-6 cursor-pointer">
              <li className="hover:text-gray-500 transition-all">
                <FaInstagram size={26}></FaInstagram>
              </li>
              <li className="hover:text-gray-500 transition-all">
                <FaTwitter size={26}></FaTwitter>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-14 mt-10">
          <p>
            Copyright © 2023 {bot.name} |{" "}
            <Link
              className="border-b-2 hover:text-gray-500 hover:border-gray-500 transition-all"
              href="/terms"
            >
              Terms Conditions
            </Link>{" "}
            |{" "}
            <Link
              href="/privacy"
              className="border-b-2 hover:text-gray-500 hover:border-gray-500 transition-all"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
