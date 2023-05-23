import React from 'react';
import "./top.css";
import {useHistory} from "react-router-dom";

const Top = () => {
    const history = useHistory();
    return (
        <div align="center" style={{marginBottom:"20px"}}>
            <div classNmae="top_btnWrap">
                <button className="top_btn" onClick={()=>history.push("/login")}>로그아웃</button>
                <button className="top_btn" onClick={()=>alert("헤헤")}>내 정보</button>
                <button className="top_btn" onClick={()=>history.push("/board")}>게시판</button>
            </div>
        </div>
    );
};

export default Top;