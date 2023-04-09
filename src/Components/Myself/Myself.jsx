import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Myself = () => {
    const ring = useContext(RingContext);
    return (
        <div className="border">
            <h1>Myself</h1>
            <p>
                <small>{ring}</small>
            </p>
        </div>
    );
};

export default Myself;
