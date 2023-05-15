import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {URL_BASE, URL_BOARD_LIST} from "../statics/Links";
import BoardItem from "./board_items/BoardItem";

const Board = () => {
    const [boards, setBoards] = useState([]);

    useEffect(()=>{
        fetch(`${URL_BASE}${URL_BOARD_LIST}`)
            .then((res) =>
            res.json())
            .then((res) => {
                setBoards(res);
                console.log(res);
            })
    }, []);

    return (
        <div>
            <div>
                <Link to={'/login'}>로그아웃</Link>
            </div>
            <div>
                {boards.map((board) => (
                    <BoardItem key={board.id} boards={board} />
                ))}
            </div>

        </div>
    );
};

export default Board;