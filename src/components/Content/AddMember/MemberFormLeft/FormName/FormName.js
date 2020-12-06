import React from 'react';
import { AddNewMemberNameActionCreator, UpdateNewMemberNameActionCreator } from '../../../../../store';

import style from './FormName.module.css';


const FormName = (props) => {

    let memberName = React.createRef();


    let addNewMember = () => {
        props.dispatch(AddNewMemberNameActionCreator())
    }

    let onNameChange = () => {
        let newMemberName = memberName.current.value;
        props.dispatch(UpdateNewMemberNameActionCreator(newMemberName));
    }
    return (
        <>
            <div className={style.wrapper}>
                <h3>Прізвище, ім'я по батькові</h3>
                <input onChange={onNameChange} ref={memberName} value={props.addMember.memberName} />
                <button onClick={addNewMember}>add</button>

            </div>
        </>
    )
};

export default FormName;