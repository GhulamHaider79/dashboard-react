import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchBox() {
  return (
    <div className='searchBox '>
         <IoSearch />
          <input type="text" placeholder='Quick Finding' />
        </div>
  )
}

export default SearchBox