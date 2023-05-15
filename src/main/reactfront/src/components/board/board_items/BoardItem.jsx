import React from 'react';

const BoardItem = (props) => {
    const {title, content} = props.boards;
    console.log(title);
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default BoardItem;