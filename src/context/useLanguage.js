import { useContext } from "react";
import LanguageContext from "./LanguageContext.jsx";

export const useLanguage = () => useContext(LanguageContext);
