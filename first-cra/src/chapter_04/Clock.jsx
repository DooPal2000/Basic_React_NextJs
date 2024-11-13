import React from "react";

function Clock() {
    return (
        <div>
            <h1>안녕 리액트</h1>
            <p>현재 시간: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
