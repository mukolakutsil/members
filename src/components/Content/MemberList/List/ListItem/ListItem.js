import React from 'react';

import style from './ListItem.module.css';


let members = ['Mykola', 'Andry', 'Toni', 'Miha', 'Stas', 'Lilia', 'Masha', 'Dana', 'Dimon', 'Den', 'Igor'];


const ListItem = (props) => {
    return (
        <>
            <div className={style.wrapper}>

                {props.members.map(m => {
                    return <div key={m.id} className={style.item}>{m.name}</div>
                })
                }

            </div>
        </>
    )
};


export default ListItem;