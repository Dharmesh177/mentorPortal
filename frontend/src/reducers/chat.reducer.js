// reducers/index.js

const initialState = {
    messages: []
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        case "RECEIVE_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        default:
            return state;
    }
};

export default chatReducer;
