import React from 'react'
import './Searchbox.css';

const Searchbox = () => {
  return (
    <div className='Card'>
        <div className='categories'>
            <h5>Stay</h5>
            <h5>Flight</h5>
            <h5>Cars</h5>
            <h5>Packages</h5>
        </div>
        <div className='search_input'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Search</button>
        </div>
      
    </div>
  )
}

export default Searchbox
