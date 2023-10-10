import React, {createContext, useState} from "react";

const NumberContext = createContext();

const NumberProvider = ({children}) => {
    const [number, setNumber] = useState(0);
    const [inboxNumber, setInboxNumber] = useState(100);

    const incrementNumber =()=>{
        setNumber(prevNumber=> prevNumber+1);
    };
    const resetInbox =()=>{
        setInboxNumber(0);
    }

    return(
        <NumberContext.Provider value={{number, inboxNumber, incrementNumber, resetInbox}}>
            {children}
        </NumberContext.Provider>
    );
};

export {NumberProvider, NumberContext};