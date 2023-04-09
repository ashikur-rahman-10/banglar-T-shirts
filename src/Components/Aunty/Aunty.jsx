import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div className="border">
            <h1>Aunty</h1>
            <section className="flex">
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Aunty;
