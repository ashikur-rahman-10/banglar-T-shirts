import React from "react";
import Brother from "./Brother";
import Sister from "./Sister";
import Myself from "../Myself/Myself";

const Father = () => {
    return (
        <div className="border">
            <h1>Father</h1>
            <section className="flex">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;
