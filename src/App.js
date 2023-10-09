import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register';
import Login from './login';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'  element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
