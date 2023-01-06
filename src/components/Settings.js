import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export const Settings = () => {
    const [greeting, setGreeting] = useState("");

    // to be implemented in context
    const { changeGreeting } = useContext(UserContext);

    const handleInput = () => {
        // e.preventDefault();
        changeGreeting(greeting);
    };

    return (
        <div style={{ border: "5px solid red", padding: "8px" }} id="settings">
            <h4>Settings</h4>
            <input type={"text"} onChange={(e) => { setGreeting(e.target.value) }} onKeyUp={handleInput} />
        </div>
    );
};
