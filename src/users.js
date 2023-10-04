const Users = () => {
    return (
        <div className="users">
            <header>Chatlly Web</header>
            <input type="search" placeholder="Search" className="search"/> 
            <div className="user">
                <div className="user-one">
                    <img src={require("./IMG_E0021.JPG")} alt="khaliel" />
                    <p id="user-id">khaliel</p>
                </div>
                <div className="user-two">
                    <img src={require("./Screenshot from 2023-10-04 20-17-36.png")} alt="khaliel" />
                    <p id="user-id">owner</p>
                </div>
            </div>
        </div>
    );
}
 
export default Users;