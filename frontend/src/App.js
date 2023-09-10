import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ChatPage from './pages/Chat';

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem('user')) {
        setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar user={user}></NavBar>
      <div className="pages">
        <Routes>
          <Route path="/"
                 element={user === null ? <SignUp/> :  <Navigate to='/home'/>}
          />
          <Route path="/signup"
                 element={user === null ? <SignUp/> :  <Navigate to='/home'/>}
          />
          <Route path="/home"
                 element={<Home/>}
          />
          <Route path="/chat"
                 element={<ChatPage/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
