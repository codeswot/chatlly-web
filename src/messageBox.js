const MessageBox = () => {
    return (
        <div className="message-box">
            <header>
            <div className="user-two">
                    <img src={require("./Screenshot from 2023-10-04 20-17-36.png")} alt="khaliel" />
                    <p id="user-id">owner</p>
                </div>
            </header>
            <textarea placeholder="Message" className="input" type="text" />
        </div>
    );
}

export default MessageBox;