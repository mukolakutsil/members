import React from 'react';

import style from './List.module.css';
import ListItem from './ListItem/ListItem';


const List = (props) => {
    return (
        <>
        <div className={style.wrapper}>
            <ListItem/>
        </div>
        </>
    )
};


export default List;