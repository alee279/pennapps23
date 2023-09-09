import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ChatPage from './pages/Chat';

function App() {
  const [user, setUser] = useState('null');
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/"
                 element={user ? <Navigate to='/home'/> : <SignUp/> }

          />
          <Route path="/signup"
                 element={user ? <Navigate to='/home'/> : <SignUp/>}
          />
          <Route path="/home"
                 element={<Home/>}
          />
          <Route path="/chat"
                 element={<ChatPage email="test@gmail.com" channel="Test Chat"/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
