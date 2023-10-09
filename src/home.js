import SideBar from './sideBar';
import Users from './users';
import MessageBox from './messageBox';

const Home = () => {
    return (
       <div className="body">
         <SideBar />
        <Users />
        <MessageBox />
       </div>
    );
}
 
export default Home;