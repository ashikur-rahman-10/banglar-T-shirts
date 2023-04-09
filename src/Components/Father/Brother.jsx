import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money, SetMoney] = useContext(MoneyContext);
    return (
        <div className="border">
            <h1>Brother</h1>
            <p>Has money:{money}</p>
        </div>
    );
};

export default Brother;
