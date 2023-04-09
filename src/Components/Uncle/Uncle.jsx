import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [money, SetMoney] = useContext(MoneyContext);
    return (
        <div className="border">
            <h1>Uncle</h1>
            <p>Has money:{money}</p>
            <section className="flex">
                <Cousin>Aliya</Cousin>
                <Cousin>Dalia</Cousin>
                <Cousin>malia</Cousin>
            </section>
            <button onClick={() => SetMoney(money + 1000)}>Sent 1000tk</button>
        </div>
    );
};

export default Uncle;
