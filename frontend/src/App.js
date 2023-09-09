import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup"
                 element={<SignUp/>}
          />
          <Route path="/home"
                 element={<Home/>}
          />
          <Route path="/chat"
                 element={<Chat/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
