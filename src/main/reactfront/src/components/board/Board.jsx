import React from 'react';
import {Link} from "react-router-dom";

const Board = () => {
    return (
        <div>
            <div>
                <Link to={'/login'}>로그아웃</Link>
            </div>
            <div>
                <div>제목</div>
                <div>내용</div>
            </div>
        </div>
    );
};

export default Board;