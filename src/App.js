import SideBar from './sideBar';
import Users from './users';
import MessageBox from './messageBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <div className="body">
        <SideBar />
        <Users />
        <MessageBox />
        </div> 
        TODO: Make the above a seperate as (Chat) component and use it as the
        element bello
        */}
        {/* also let the base path / route to Register */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path='/chat' element={<Chat />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
