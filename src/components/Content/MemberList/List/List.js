import React from 'react';

import style from './List.module.css';
import ListItem from './ListItem/ListItem';


const List = (props) => {
    return (
        <>
        <div className={style.wrapper}>
            <ListItem members={props.members}/>
        </div>
        </>
    )
};


export default List;