
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Navbar'
import ProductList from './components/ProductList'
import "./index.css"
import CartList from './components/CartList'

function App() {
  return (
    <>
      <BrowserRouter basename="/redux-rtk">
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
