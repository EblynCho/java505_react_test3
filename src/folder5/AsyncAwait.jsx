// AsyncAwait.jsx

import React from "react";
import axios from "axios";

// async / await : 비동기 처리를 조금 더 쉽게 하기 위해서 개발됨
// 기본적으로 promise 를 사용함

// 사용법 :
// async function 함수명(매개변수) {
//      const 변수명 = await promise 를 사용하는 함수();
//      console.log(변수명);
// }

function AsyncAwait(props) {

    const fetchItems = () => {
        return new Promise((resolve, reject) => {
            const items = [1, 2, 3];
            resolve(items);
        });
    }

    // 프로미스 사용 시 비동기 처리 방법
    const logItem1 = () => {
        fetchItems()
            .then((item) => {
                console.log(item)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // async/await 사용 시 비동기 처리 방법
    const logItem2 = async () => {
        const resultItems = await fetchItems();
        // resultItems.then(() => {  // 이렇게 then/catch 쓰기도 가능(async/await 와 함께 사용 시 then() 필요할 경우 나중에 호출할 수 있음)
        //
        // })
        //     .catch(() => {
        //
        //     })
        console.log(resultItems);
    }

    const getData = async () => {
        const {data} = await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109');
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }

    return (
        <div className={'container m-5'}>
            <button className={'btn btn-primary'} onClick={logItem1}>프로미스 사용</button>
            <button className={'btn btn-success'} onClick={logItem2}>async/await 사용</button>
            <button className={'btn btn-info'} onClick={getData}>axios와 함께 사용</button>
        </div>
    );
}

export default AsyncAwait;