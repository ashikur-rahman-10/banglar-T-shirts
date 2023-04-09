import React, { createContext, useState } from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const [money, SetMoney] = useState(0);
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <p>Has money:{money}</p>
            <MoneyContext.Provider value={[money, SetMoney]}>
                <RingContext.Provider value="golden ring">
                    <div className="flex">
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </div>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
