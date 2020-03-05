import { createStore } from 'redux';

let initState = {
    mode: 'WELCOME',
    welcome_content: {
        title: 'WEB',
        desc: 'Hello, everyone.'
    },
    selected_id: 1,
    max_id: 3,
    contents: [
        {id:1, title:'HTML', desc:'HyperText Markup Language is ...'},
        {id:2, title:'CSS', desc:'Cascading Style Sheet is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}
    ]
};
function reducer(state=initState, action) {
    if (action.type === 'WELCOME') {
        return {...state, mode:'WELCOME'};
    } else if (action.type === 'READ') {
        return {...state, mode:'READ', selected_id:action.id}
    } else if (action.type === 'CREATE') {
        return {...state, mode:'CREATE'}
    } else if (action.type === 'CREATE_PROC') {
        let newMaxId = state.max_id + 1;
        let newContents = [...state.contents,       // contents를 복제
                    {id:newMaxId, title:action.title, desc:action.desc}];
        return {...state, mode:'READ', selected_id:newMaxId, max_id:newMaxId, contents:newContents}
    } else if (action.type === 'UPDATE') {
        return {...state, mode:'UPDATE'}
    } else if (action.type === 'UPDATE_PROC') {
        let newContents = [];
        for (let item of state.contents) {
            if (item.id === action.id)
                newContents.push({id:action.id, title:action.title, desc:action.desc})
            else
                newContents.push(item);
        }
        return {...state, mode:'READ', selected_id:action.id, contents:newContents}
    } else if (action.type === 'DELETE_PROC') {
        /* let newContents = [];
        for (let item of state.contents) {
            if (item.id !== state.selected_id)
                newContents.push(item);
        } */
        let newContents = state.contents.filter(function(e) {
            return e.id === state.selected_id ? false : true;
        })
        return {...state, mode:'WELCOME', selected_id:newContents[0].id, contents:newContents}
    }
    return state;
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());