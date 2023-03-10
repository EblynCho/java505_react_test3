// MainContext.jsx

import React, {useContext} from "react";
// 파일로 생성된 컨텍스트를 import 하여 사용, 여러 컴포넌트에서 활용이 가능함
import ThemeContext from "./ThemeContext";

function MainContext(props) {
    // useContext() hook 을 사용하여 <Context.Consumer> 없이 컨텍스트에 저장된 정보를 사용함
    const {theme, toggleTheme} = useContext(ThemeContext);  // 객체를 넘기기 때문에 중괄호 {} 사용

    return (
        <div style={{
            width: "100vw",
            height: "100hw",
            padding: "1.5rem", // rem : 고정값
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white"
        }}>
            <p>테마 변경이 가능한 웹 사이트</p>
            {/* button 태그의 클릭 이벤트에 컨텍스트를 통해 가져온 함수를 설정함 */}
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContext;