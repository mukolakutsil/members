import React from 'react';
import { Route } from 'react-router-dom';
import AddMember from './AddMember/AddMember';

import style from './Content.module.css';
import MemberList from './MemberList/MemberList';

const Content = (props) => {
    return (
        <>
            <div className={style.wrapper}>
            <Route exact path='/memberlist' component={MemberList}/>
            <Route exact path='/addmember' component={AddMember}/>
            </div>
        </>
    )
};

export default Content;