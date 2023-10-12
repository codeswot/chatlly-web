import { IoSend } from 'react-icons/io5'

const MessageBox = () => {
    return (
        <div className="message-box">
            <header>
                <div className="user-two">
                    <img src={require("./Screenshot from 2023-10-04 20-17-36.png")} alt="khaliel" />
                    <p id="user-id">owner</p>
                </div>
            </header>
            <div className="message">
                <textarea placeholder="Message" className="input" type="text" />
                <IoSend className='icon' />
            </div>

        </div>
    );
}

export default MessageBox;