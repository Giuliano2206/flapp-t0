import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainView from './components/MainView.js'
import CheckOut from './components/CheckOut.js';
import CartProvider from './context/CartContext.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <MainView/>
            }
          />
          <Route
            path='/checkout'
            element={
              <CheckOut/>
            }
          />
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
