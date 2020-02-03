import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Search.css'

function Search() {
    let query;
    return (
        <form className='search-container'>
          <input type='text' ref={node => query = node} autoFocus/>
          <div className='search-submit'></div>
        </form> 
    )
}

export default Search

  