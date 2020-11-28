import React from 'react';

import style from './ListItem.module.css';


let members = ['Mykola', 'Andry', 'Toni', 'Miha', 'Stas', 'Lilia', 'Masha', 'Dana', 'Dimon', 'Den', 'Igor'];


const ListItem = (props) => {
    return (
        <>
            <div className={style.wrapper}>

                {members.map(m => {
                    return <ul className={style.ul}>
                        <li className={style.li}>{m}</li>
                    </ul>
                })
                }

            </div>
        </>
    )
};


export default ListItem;