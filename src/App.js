import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ProductInfo from './Components/SingleProduct/ProductInfo';
import CategrizeProduct from './Components/Category/CategrizeProduct';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AppContext from './Components/Utils/Context';
import PageNoteFound from './Components/PageNoteFound';
import Newsletter from './Components/Footer/Newsletter';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import SearchItem from './Components/Search/SearchItem';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Category/:id' element={<CategrizeProduct />} />
            <Route path='/Product/:id' element={<ProductInfo />} />
            <Route path="/Product" element={<Products />} />"
            <Route path='/about' element={<About/>} />
            <Route path='/Search' element={<SearchItem/>}/>
            <Route path="*" element={<PageNoteFound />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  )
}