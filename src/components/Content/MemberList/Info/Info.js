import React from 'react';

import style from './Info.module.css';
import MemberAvatar from './MemberAvatar/MemberAvatar';

import MemberDetails from './MemberDetails/MemberDetails';



const Info = (props) => {
    return (
        <div className={style.wrapper}>
            <MemberAvatar/>
            <MemberDetails/>
            <div className={style.blockButton}>
                <p>texttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
            </div>
        </div>
    )
};

export default Info;
