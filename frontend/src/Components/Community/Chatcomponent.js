// components/Chat.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../actions/chat.action";
// import "./Chatcomponent.css";

const Chatcomponent = () => {
    const [message, setMessage] = useState("");
    const { messages } = useSelector(state => state.messages);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendMessage(message));
        setMessage("");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="input"
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button className="button" type="submit">
                    Send
                </button>
            </form>
            <ul className="messages">
                {messages.map((message, index) => (
                    <li key={index} className="message">
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Chatcomponent;
