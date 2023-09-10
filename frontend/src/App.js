import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Login from './pages/Login'
import ChatPage from './pages/Chat';

function App(props) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem('user')) {
        setUser(JSON.parse(localStorage.getItem('user')));
    }
    console.log(user);
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
                 element={user !== null ? <Home user={user}/> : <Navigate to='/signup'/>}
          />
          <Route path="/chat"
                 element={<ChatPage user={user}/>}
          />
          <Route path="/login"
                 element={user === null ? <Login/> :  <Navigate to='/home'/>}
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
