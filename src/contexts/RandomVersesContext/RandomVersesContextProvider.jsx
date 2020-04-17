import React, { useState } from "react";
import RandomVersesContext from './RandomVersesContext';

const RandomVersesContextProvider = ({ children }) => {
    const [randomVerses, setRandomVerses] = useState([]);

    const value = { randomVerses, setRandomVerses };

    return (
        <RandomVersesContext.Provider value={value}>
            {children}
        </RandomVersesContext.Provider>
    );
}

export default RandomVersesContextProvider;