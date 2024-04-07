"use client";
import Cookies from "js-cookie";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    const currentPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");
    console.log(currentPath);
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
    router.push(`${currentPath}`, `${lang}${currentPath}`, { locale: lang });
  };



  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <button
            className="flex items-center gap-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Image
              className="max-w-8"
              src={selectedLanguage.code === "en" ? "/en.png" : "/bn.jpg"}
              alt={selectedLanguage.code === "en" ? "english" : "bangla"}
              height={100}
              width={165}
            />
            {selectedLanguage.language}
          </button>
          {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
              {languages.map((entry) => (
                <li
                  key={entry.code}
                  onClick={() => handleLanguageChange(entry.code)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <Image
                    className="max-w-8"
                    src={entry.code === "en" ? "/en.png" : "/bn.jpg"}
                    alt={entry.code === "en" ? "english" : "bangla"}
                    height={100}
                    width={165}
                  />
                  {entry.language}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
