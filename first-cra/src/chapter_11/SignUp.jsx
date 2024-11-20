import React, { useState } from "react";


function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`Welcome, ${name}!, Your gender is ${gender}!`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                Gender:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;