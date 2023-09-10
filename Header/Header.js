import React, { useState } from 'react'
import { FaListUl, FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
import Cart from '../Cart/Cart';
import SearchItem from '../Search/SearchItem';
import { Link } from 'react-router-dom';

function Header() {
  const [showCart, setCart] = useState(false);
  const [showSearch, setSearch] = useState(false);

  const Toggle = () => {
    if (showCart) {
      setCart(false);
    }
    else {
      setCart(true);
    }
  }

  const SearchToggle = () => {
    if (showSearch) {
      setSearch(false);
    }
    else {
      setSearch(true);
    }
  }

  return (
    <>
      <div className='main-header z-50 sticky top-0 h-14 items-center backdrop-blur-sm flex justify-around sm:justify-around md:justify-around  text-white bg-cyan-950 shadow'>
        <div className='left text-emerald-50'>
          {/* if user Serach on Tab or Desktop then that will be show this */}

          <ul className='hover:text-red-500 text-lg md:hidden sm:hidden cursor-pointer'>
            <li><FaListUl /></li>
          </ul>

          <ul className='hidden sm:main-header sm:h-12 sm:items-center sm:backdrop-blur-sm sm:flex sm:justify-around space-x-5'>
            <Link to="/" className='hover:bg-red-500 rounded-xl p-1 cursor-pointer'>Home</Link>
            <Link to="/about" className='hover:bg-red-500 rounded-xl p-1 cursor-pointer'>About</Link>
            <Link className='hover:bg-red-500 rounded-xl p-1 cursor-pointer'>Categoryes</Link>
          </ul>
        </div>

        <div className=" text-2xl cursor-pointer first-line:font-bold md:center md:text-2xl sm:text-xl "><Link to="/">MeeShoo</Link> </div>
        <div>
          <ul className="text-lg gap-1 flex md:text-xl md:gap-1 md:space-x-5 sm:space-x-2 md:items-center ">
            <Link className='hover:text-red-500 rounded-xl p-1 cursor-pointer' onClick={SearchToggle}><FaSearch /></Link>
            <Link className='hover:text-red-500 rounded-xl p-1 cursor-pointer '><FaHeart /></Link>
            <Link className='hover:text-red-500 rounded-xl p-1 cursor-pointer ' onClick={Toggle} ><FaShoppingCart /></Link>
          </ul>
        </div>
      </div>
      <div className="-right-side-bar">
        {showCart && <Cart toggle={Toggle} />}
      </div>
      {showSearch && <SearchItem SearchToggle={SearchToggle} />}
    </>
  )
}

export default Header