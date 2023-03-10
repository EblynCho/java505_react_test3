import React from "react";
import NotificationList from "./folder2/NotificationList";
import CountButton from "./folder2/CountButton";
import CountButton2 from "./folder2/CountButton2";
import Accommodate from "./folder2/Accommodate";
import Calculator from "./folder2/Calculator";
import Events from "./folder2/Events";
import ConfirmButton from "./folder2/ConfirmButton";

function App5() {
    return (
        <div className={"container"}>
            <NotificationList />
            <CountButton />
            <CountButton2 />
            <br/>
            <Accommodate />
            <br/>
            <div className={"container border rounded-3 py-5 px-5"} style={{width: 750}}>
                <Calculator />
            </div>
            <br/>
            <Events />
            <br/>
            <ConfirmButton />
        </div>
    );
}

export default App5;