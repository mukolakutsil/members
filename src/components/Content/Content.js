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
            <Route exact path='/addmember'  render={()=> <AddMember updateNewMemberName={props.updateNewMemberName}  addMember={props.state.addMember} addNewMemberName={props.addNewMemberName}/>}/>
            </div>
        </>
    )
};

export default Content;