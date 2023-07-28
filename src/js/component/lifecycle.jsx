import React, { useState } from "react";
import Text from "./text";

const Lifecycle = () => {
    const [showText, setShowText] = useState(false)

    return (
        <>
            <div className="text-center m-5">
                <button onClick={() => setShowText(!showText)}>
                    Toggle Text
                </button>
                <div className="mt-5">
                    {showText && <Text />}
                </div>
            </div>
        </>
    );
};

export default Lifecycle;