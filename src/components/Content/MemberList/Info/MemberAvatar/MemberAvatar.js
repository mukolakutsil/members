import React from 'react';


import style from './MemberAvatar.module.css';

const MemberAvatar = (props) => {
    return (
        <>
            <div className={style.wrapper}>
                <img className={style.img} src="https://s.032.ua/section/newsInText/upload/images/news/intext/000/051/339/724662039762630393806213756266135226417152n_5da9829f04302.png" />
            </div>
        </>
    )
};

export default MemberAvatar;