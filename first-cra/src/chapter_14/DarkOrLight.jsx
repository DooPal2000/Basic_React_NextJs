import { useState, useCallback } from "react";
import ThemeContext from "./theme-context";
import MainContent from "./MainContent";


function DarkOrLight() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;

// 맞습니다! `useContext`는 **`MainContent`** 컴포넌트에서 **`ThemeContext`**에서 값을 가져오는 역할을 합니다. 이를 좀 더 명확히 설명하면:

// ### 1. **`ThemeContext.Provider`** 역할
// ```jsx
// <ThemeContext.Provider value={{ theme, toggleTheme }}>
//     <MainContent />
// </ThemeContext.Provider>
// ```
// - 여기서 **`ThemeContext.Provider`**는 `theme`와 `toggleTheme`을 **`value`**로 제공하고 있습니다.
// - 이 `value`는 **`MainContent`** 컴포넌트에서 사용할 수 있습니다. 즉, `theme`(테마)와 `toggleTheme`(테마를 전환하는 함수)가 **`MainContent`**에 전달됩니다.

// ### 2. **`useContext` 훅** 역할
// ```jsx
// const { theme, toggleTheme } = useContext(ThemeContext);
// ```
// - `useContext` 훅을 사용하면, **`ThemeContext`**에서 제공하는 값들을 가져올 수 있습니다.
// - 여기서 `useContext(ThemeContext)`는 `ThemeContext.Provider`에서 전달한 `theme`와 `toggleTheme`을 받아옵니다. 이를 통해 `theme`와 `toggleTheme`을 `MainContent`에서 사용할 수 있게 되는 것입니다.

// ### 3. **테마 전환**
// - `MainContent` 컴포넌트는 `theme` 값에 따라 배경색과 텍스트 색을 변경합니다.
// - **`toggleTheme`** 함수는 `theme`을 "light"와 "dark" 간에 토글하는 함수로, 버튼 클릭 시 실행되어 테마를 변경합니다.

// ### 4. **실제로 값이 전달되는 흐름**
// - **`DarkOrLight`** 컴포넌트에서 `ThemeContext.Provider`로 `theme`와 `toggleTheme`을 **`value`**로 제공.
// - **`MainContent`** 컴포넌트에서 `useContext(ThemeContext)`를 통해 `theme`와 `toggleTheme`을 가져옵니다.
// - 이 값들을 사용하여 테마를 변경하고 화면에 적용합니다.

// ### 5. **정리**
// - `ThemeContext`에 값이 전달되고, `MainContent`는 `useContext`를 통해 그 값을 읽어와 화면을 렌더링하는 역할을 합니다.
// - 즉, **`theme`와 `toggleTheme`은 `ThemeContext`로 전달되며,** `MainContent`는 이 값을 **`useContext`**를 통해 받는 형태입니다.

// 이와 같은 방식으로 Context를 사용하여 컴포넌트 간에 전역 상태를 관리할 수 있습니다.