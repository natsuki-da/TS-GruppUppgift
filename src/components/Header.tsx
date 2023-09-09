import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <h1>Help</h1>
        {/* <label htmlFor="text">Search</label> */}
        {/* <input title="Searchbar" type="text" name="SearchBar" id="Searchbar" placeholder='Search...' />
        <img src="https://www.svgrepo.com/show/127033/magnifying-glass.svg" alt="search" id='img'/> */}
        {/* <button id='src-btn'> Search</button> */}
        <a href="/CreatePost" id='create-btn'>Create new Post</a>
      </div>
    </div>
  )
}

export default Header;