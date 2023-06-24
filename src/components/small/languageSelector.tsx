import { languageOptions } from "@/utils/languageOptions";
import { ReactSVG } from "react-svg";
import { ChangeEvent, useState } from "react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  onChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onChange,
}) => {
  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language: string = event.target.value;
    onChange(language);
  };

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="p-2 rounded border border-gray-300"
    >
      {languageOptions.map((option) => (
        <option key={option.code} value={option.code}>
          <img
            src="/flags/uk.svg"
            alt={`${option.name} flag`}
            className="w-6 h-4 mr-2"
          />
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
