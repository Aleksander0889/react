import React, { createContext, useContext, useState} from "react";
import { T } from "vitest/dist/types-7cd96283";

type IContext = {
    prevData: string;
    value: any;
    defaultValue: T;
}

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
    const setValues = (value) => {
        setData((prevData) => ({
            ...prevData,
            ... value,
        }))
    }

    return (
        <DataContext.Provider value={{ data, setValues}}>
            {children}
            </DataContext.Provider>
    )
}
export const useData = () => useContext(DataContext) 