
const ADD_NEW_MEMBER_NAME = "ADD-NEW-MEMBER-NAME";
const UPDATE_NEW_MEMBER_NAME = "UPDATE-NEW-MEMBER-NAME";

let store = {
    _state: {
        memberList: {
            members: [{ di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" },
            { di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" },
            { di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" }, { di: 1, name: "Микола Куціль" }],
            memberInfo: [{
                name: "Куціль Микола Ігорович", birthdayDate: "22.12.2000", workDate: "16.10.2019",
                home: "м. Долина"
            }],
        },
        addMember: {
            memberName: "",
        }
    },
    _callSubscriber() {
        console.log("Hello!")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_NEW_MEMBER_NAME) {
            let newMember = {
                id: 11,
                name: this.getState().addMember.memberName
            };
            this._state.memberList.members.push(newMember);
            this._state.addMember.memberName = '';
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_MEMBER_NAME) {
            this._state.addMember.memberName = action.newName;
            this._callSubscriber(this._state);
        }
    }

};

export const AddNewMemberNameActionCreator = () => {
    return {
        type: ADD_NEW_MEMBER_NAME
    }
};

export const UpdateNewMemberNameActionCreator = (newMemberName) => {
    return {
        type: UPDATE_NEW_MEMBER_NAME, newName: newMemberName
    }
};



window.state = store.getState;




export default store;