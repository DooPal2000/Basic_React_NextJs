import React from "react";

function Book(props){
    return(
        <div className="book">
            <h2>이 책의 이름은 {props.name}</h2>
            <p>이 책의 이름은 {props.numOfPage} 페이지로 이뤄져 있습니다.</p>
        </div>
    );
}

export default Book;