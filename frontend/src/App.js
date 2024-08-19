import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from './components/MainView.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainView/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
