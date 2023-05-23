import React from 'react';
import "./BoardItem.css";

const BoardItem = (props) => {
    const {title, content} = props.boards;
    console.log(title);
    return (
        <div className="board_itemWrap">
            <div className="board_titleText">{title}</div>
            <div className="board_authorText">용용이</div>
            <div className="board_createAtText">2022-12-31</div>
        </div>
    );
};

export default BoardItem;