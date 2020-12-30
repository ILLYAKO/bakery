import React, { createContext } from "react";

const test = {
  text1: { simpleText1: "Text simple1" },
  text2: { simpleText2: "Text simple2" },
};
export const ProductContext = React.createContext(test.text1);
