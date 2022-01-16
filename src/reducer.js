import uuid from 'uuid/v1';

export const dataReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return [...state, {
                title: action.data.title,
                author: action.data.author,
                id: uuid()
            }]
            case 'REMOVE_BOOK' :
                return state.filter(book => book.id !== action.id)
                default:
                    return state
    }
}