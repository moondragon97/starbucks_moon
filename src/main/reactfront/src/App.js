import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';

function App() {
    const [num, setNum] = useState(0);
    const [numList, setNumList] = useState([]);

    function recording(){
        setNumList([...numList, num]);

        setNum(0);
    }
  return (
    <div className="App">
        <h1>{num}</h1>
        <button onClick={()=>{setNum(num+1)}}> 숫자증가</button>
        <button onClick={()=>{setNum(num-1)}}> 숫자감소</button>
        <p><button onClick={()=>{recording()}}>기록</button></p>
        <p>기록숫자</p>
        <ul>
            {numList.map((rec) => (
                <li>{rec}</li>
                ))}
        </ul>

    </div>
  );
}

export default App;
