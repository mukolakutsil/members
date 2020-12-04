import { rerenderEntireTree } from "./render";

let state = {
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
};

window.state = state;

export let addNewMemberName = () => {
    let newMember = {
        id: 11,
        name: state.addMember.memberName
    };

    state.memberList.members.push(newMember);
    state.addMember.memberName = '';
    rerenderEntireTree(state)
};

export let updateNewMemberName = (newName) => {
    state.addMember.memberName = newName;
    rerenderEntireTree(state);
};

export default state;