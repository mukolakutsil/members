import React from 'react';

import style from './MemberFormRight.module.css';


const MemberFormRight = (props) => {

    // let memberName = React.createRef();


    // let addNewMember = () => {
    //     props.addNewMemberName()
    // }

    // let onNameChange = () => {
    //     let newMemberName = memberName.current.value;
    //     props.updateNewMemberName(newMemberName)
    // }
    return (
        <>
            <div className={style.wrapper}>
                <h1>Заповніть анкету для нового ментора</h1>
                {/* <input onChange={onNameChange} ref={memberName} value={props.addMember.memberName} />
                <button onClick={addNewMember}>add</button> */}

            </div>
        </>
    )
};

export default MemberFormRight;