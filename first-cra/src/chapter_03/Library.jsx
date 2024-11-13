import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div className="library">
            <div>
                <Book name="처음만난 파이썬" numOfPage={300}/>
                <Book name="처음만난 AWS" numOfPage={400}/>
                <Book name="처음만난 React" numOfPage={500}/>
            </div>
        </div>
    );
}

export default Library;