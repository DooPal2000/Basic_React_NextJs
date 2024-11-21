import { useContext } from "react";
import ThemeContext from "./theme-context";

function MainContent(props){
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return(
        <div 
        style={{
            width: '100vw',
            height: '100vh',
            padding: '1.5rem',
            backgroundColor: theme == "light"? "white" : "black",
            color: theme == "light"? "black" : "white"  // text color is inverse of background color when theme is light.
        }}        
        >
            <h1>흑백요리사 테마변경 예제</h1>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContent;