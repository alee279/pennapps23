import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login'
import ChatPage from './pages/Chat';

function App() {
  const [user, setUser] = useState('null');
  
  useEffect(() => {
    let user = null;
    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'));
    }
    setUser(user);
    console.log(user);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <div className="pages">
        <Routes>
          <Route path="/"
                 element={user ? <Navigate to='/home'/> : <SignUp/> }
          />
          <Route path="/signup"
                 element={<SignUp/>}
          />
          <Route path="/home"
                 element={<Home/>}
          />
          <Route path="/chat"
                 element={<ChatPage/>}
          />
          <Route path='/login'
                 element={<Login/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
