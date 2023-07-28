import React, { useState } from "react";

const Text = () => {
    const [text, setText] = useState("");

    return (
        <>
            <input 
                type="text" 
                onChange={event => {
                    setText(event.target.value)
                }}
            />
            <h1>{text}</h1>
        </>
    );
};

export default Text;