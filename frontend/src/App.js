import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup"
                 element={<SignUp/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
