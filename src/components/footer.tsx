import ImageAvatar, { bot } from "./small/avatar";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BsLayoutTextWindow } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Link from "next/link";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";

import LanguageSelector from "./small/languageSelector";

const options: any = [
  { value: "german", label: "Germany" },
  { value: "english", label: "English" },
];

function Footer() {
  const [animal, setAnimal] = useState<any | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  // const handleChange = (value: SelectValue) => {
  //   console.log("value:", value);
  //   setAnimal(value);
  // };

  // const handleSVGInjection = (svg: any) => {
  //   svg.setAttribute("height", "20px");
  //   svg.setAttribute("width", "20px");
  // };

  return (
    <>
      <footer className="bg-waveColor pt-16 pb-20">
        <div className="flex flex-col md:flex-row gap-14 items-start mx-14 mb-7">
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex gap-2">
              <ImageAvatar src={bot.imageUrl}></ImageAvatar>
              <h6 className="text-2xl font-semibold">{bot.name}</h6>
            </Link>
            <p className="max-w-sm text-sm">
              Introducing {bot.name}, the lightning-fast Discord card bot that
              brings the excitement of collecting cards to your server! With an
              extensive collection of user-friendly cards, you'll embark on a
              thrilling journey of discovery and strategic gameplay. Unleash
              your inner collector and join the adventure with {bot.name} today!
            </p>
          </div>
          <div className="md:ml-8">
            <h6 className="mb-7 text-2xl font-semibold">Contact</h6>
            <ul className="flex flex-col gap-4 cursor-pointer">
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
                <Link href="/">
                  <FaInstagram size={26}></FaInstagram>
                </Link>
              </li>
              <li className="hover:text-gray-500 transition-all">
                <Link href="/">
                  <FaTwitter size={26}></FaTwitter>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h6 className="mb-7 text-2xl font-semibold">Discover More</h6>
            <ul className="flex flex-col gap-4 cursor-pointer">
              <li className="flex gap-2 items-center hover:text-gray-500 transition-all">
                <HiUserGroup></HiUserGroup>
                <a href="/">About Us</a>
              </li>
              <li className="flex gap-2 items-center hover:text-gray-500 transition-all">
                <BsLayoutTextWindow></BsLayoutTextWindow>
                <a href="/">Blogs</a>
              </li>
              <li className="flex gap-2 items-center hover:text-gray-500 transition-all">
                <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
                <a href="/">Join Us</a>
              </li>
            </ul>
          </div>
          <div className="min-w-[11rem] cursor-pointer">
            {/* <Select
              primaryColor="blue"
              placeholder={animal == null ? "English" : animal}
              value={animal}
              onChange={handleChange}
              options={options}
              formatOptionLabel={(data) => (
                <li className="list-none h-8 my-2 cursor-pointer items-center flex hover:bg-gray-600 transition-all duration-700 rounded-md">
                  <span className="flex items-center gap-3 mx-2">
                    <ReactSVG
                      beforeInjection={handleSVGInjection}
                      src={`/${data.value}.svg`}
                      title={`${data.value}'s flag`}
                    />
                    {data.label}
                  </span>
                </li>
              )}
              classNames={{
                menu: "bg-gray-700 w-44 p-0",
              }}
            /> */}
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onChange={handleLanguageChange}
            />
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
