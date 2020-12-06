import React from 'react';
import { Route } from 'react-router-dom';
import AddMember from './AddMember/AddMember';

import style from './Content.module.css';
import MemberList from './MemberList/MemberList';

const Content = (props) => {
    return (
        <>
            <div className={style.wrapper}>
            <Route exact path='/memberlist' render={() => <MemberList memberList={props.state.memberList} />}/>
            <Route exact path='/addmember'  render={()=> <AddMember addMember={props.state.addMember} dispatch={props.dispatch}/>}/>
            </div>
        </>
    )
};

export default Content;