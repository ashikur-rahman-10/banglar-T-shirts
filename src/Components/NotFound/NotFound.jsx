import React from "react";

const NotFound = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "85vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "50px",
                    textAlign: "center",
                }}
            >
                404 <br /> Not found!!
            </h1>
        </div>
    );
};

export default NotFound;
