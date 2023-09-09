import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ChatPage from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/signup"
                 element={<SignUp/>}
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
