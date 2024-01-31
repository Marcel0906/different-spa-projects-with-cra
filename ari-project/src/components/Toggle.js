import React from 'react';
import {useState} from 'react';

const Toggle = () => {
    const [toggleVisibility, setToggleVisibility] = useState(true);
    const [text, setText] = useState("It is visible");
    const [changeclass, setChangeclass] = useState("visible");

    function handleText() {
        if (toggleVisibility === true) {
            setToggleVisibility(false);
            setText("It is visible");
            setChangeclass("visible");
        }
        else if (toggleVisibility === false) {
            setToggleVisibility(true);
            setText("It is invisible");
            setChangeclass("invisible");
        }
    }

    return (
        <div className={changeclass}>
            <p>{text}</p>
            <button onClick={handleText}>Toggle Visibility</button>
        </div>
           
    );
}
export default Toggle;