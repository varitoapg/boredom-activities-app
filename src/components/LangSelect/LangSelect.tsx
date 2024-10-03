import { languages } from "../../i18n/settings";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LangSelect.css";

interface LangSelectProps {
  currentLanguage: string;
}

const LangSelect = ({ currentLanguage }: LangSelectProps) => {
  const { t } = useTranslation("header");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    navigate(0);
  };

  return (
    <div className="lang-select">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {t(currentLanguage)}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang} className="dropdown-option">
              <button
                onClick={() => {
                  handleChangeLanguage(lang);
                  setIsOpen(false);
                }}
              >
                {t(lang)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSelect;
