import {createContext}  from "react";
 
const ApiContext = createContext();
 
export const ApiProvider = ApiContext.Provider;
export default ApiContext;