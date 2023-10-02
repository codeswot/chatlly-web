import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MessageBox = () => {
    return (
        <div className="message-box">
            <input placeholder="Message" className="input" type="text" />
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-paper-plane-top" />
        </div>
    );
}

export default MessageBox;