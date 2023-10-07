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
        <SideBar />
        <Users />
        <MessageBox />
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
