import React from "react";
import { useLocale } from "../src/locale";

const LanguageSwitcher: React.FC = () => {
  const { locale, toggleLocale } = useLocale();
  return (
    <button
      onClick={toggleLocale}
      className="text-sm px-3 py-4 font-medium hover:text-yoden-blue transition-colors"
    >
      {locale === "ja" ? "EN" : "日本語"}
    </button>
  );
};

export default LanguageSwitcher;
