import { createContext } from "react";

import PropTypes from "prop-types";
export const CurrencyContext = createContext(null);
const CURRENCIESz = [
  { name: "درهم اماراتي", value: "uae", factor: 2, sign: "AED" },
  { name: "دينار بحريني", value: "bahrain", factor: 4, sign: "BHD" },
  { name: "ريال عماني", value: "oman", factor: 1, sign: "OMR" },
  { name: "ريال سعودي", value: "ksa", factor: 3, sign: "SAR" },
];

function CurrencyContextProvider(props) {
  //   const [currency, setCurrency] = useState("ksa");

  const contextValue = { CURRENCIESz };
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
