import { createContext, useState } from "react";

export const ContextData = createContext({
    addCustomerIsActive: false,
    setAddCustomerIsActive: () => {
        // do nothing.
    },
})

export const ContextProvider = ({ children }) => {
    const [addCustomerIsActive, setAddCustomerIsActive] = useState(false);

    return (
        <ContextData.Provider value={{ addCustomerIsActive, setAddCustomerIsActive }}>
            {children}
        </ContextData.Provider>
    );
};