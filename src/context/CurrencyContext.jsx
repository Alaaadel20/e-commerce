import { createContext } from "react";

import PropTypes from "prop-types";
import { useState } from "react";
export const CurrencyContext = createContext(null);
const CURRENCIES = [
  {
    name: "درهم اماراتي",
    value: "uae",
    factor: 2,
    sign: "AED",
    signArabic: "د.ا",
  },
  {
    name: "دينار بحريني",
    value: "bahrain",
    factor: 4,
    sign: "BHD",
    signArabic: "د.ب",
  },
  {
    name: "ريال عماني",
    value: "oman",
    factor: 1,
    sign: "OMR",
    signArabic: "ر.ع",
  },
  {
    name: "ريال سعودي",
    value: "ksa",
    factor: 3,
    sign: "SAR",
    signArabic: "ر.س",
  },
];

function CurrencyContextProvider(props) {
  const [currency, setCurrency] = useState("ksa");
  const [name, setName] = useState("ريال سعودي");
  const [arabicSign, setArabicSign] = useState("ر.س");
  const handleCurrencySettings = (newCurrency) => {
    setCurrency(newCurrency);
  };
  const handleNameSettings = (newName) => {
    setName(newName);
  };
  const handleSign = (newSign) => {
    setArabicSign(newSign);
  };
  const contextValue = {
    currency,
    CURRENCIES,
    handleCurrencySettings,
    handleNameSettings,
    name,
    handleSign,
    arabicSign,
  };
  return (
    <CurrencyContext.Provider value={contextValue}>
      {props.children}
    </CurrencyContext.Provider>
  );
}

CurrencyContextProvider.propTypes = {
  children: PropTypes.node,
};
export default CurrencyContextProvider;
