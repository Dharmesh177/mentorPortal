// actions/index.js

export const sendMessage = message => {
    return {
        type: "SEND_MESSAGE",
        message
    };
};

export const receiveMessage = message => {
    return {
        type: "RECEIVE_MESSAGE",
        message
    };
};
