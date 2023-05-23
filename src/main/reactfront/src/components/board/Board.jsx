import React, {useEffect, useState} from 'react';
import {URL_BASE, URL_BOARD_LIST} from "../statics/Links";
import BoardItem from "./board_items/BoardItem";
import Top from "../common/top/top";

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
                <Top />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
                {boards.map((board) => (
                    <BoardItem key={board.id} boards={board} />
                ))}
            </div>

        </div>
    );
};

export default Board;