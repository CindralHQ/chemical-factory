import React from 'react'
import ProductCatalogue from './components/Product/ProductCatalogue/ProductCatalogue'
import { Route, Routes } from 'react-router-dom'
import ProductInfo from './components/Product/ProductInfo/ProductInfo'
import HomeRouter from './assets/Router/HomeRouter'
import AboutUsRouter from './assets/Router/AboutUsRouter'

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<HomeRouter/>} />
        <Route path="/about" element={<AboutUsRouter/>} />
        <Route path="/products" element={<ProductCatalogue />} />
        <Route path="/product/:id" element={<ProductInfo />} />
      </Routes>
    </>
  )
}

export default App
