import _ from 'lodash';
const initialState = []

function userReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_USER":
            return [...state, { id: Math.floor((Math.random() * 1000) + 1), name: action.payload }];
        case "DELETE_USER":
            const delIndex = _.findIndex(state, function (item) { return item.id == action.payload.id })
            const delValue = [...state]
            delValue.splice(delIndex, 1)
            return delValue;
        case "UPDATE_USER":
            const index = _.findIndex(state, function (item) { return item.id == action.payload.id })
            const indexedValue = { ...state[index] }
            indexedValue.name = action.payload.name;
            state.splice(index, 1, indexedValue)
            return state;
        default:
            return state;
    }
}

export default userReducer;