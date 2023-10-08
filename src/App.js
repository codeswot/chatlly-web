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
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
        <div className="body">
        <SideBar />
        <Users />
        <MessageBox />
        </div>
      </Router>
    </div>
  );
}

export default App;
