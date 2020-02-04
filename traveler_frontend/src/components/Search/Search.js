import React from 'react'
import { connect } from 'react-redux'
import setFilter from '../../actions/setFilter.js'
import './Search.css'

const mapDispatchToProps = {
  setFilter
}

function Search({setFilter}) {
// setFilter
  let query;
    return (
        <form className='search-container' onSubmit={e => {e.preventDefault(); setFilter(query.value)}}>
          <input type='text' ref={node => query = node} autoFocus/>
          <div className='search-submit' onClick={e => {e.preventDefault(); setFilter(query.value)}}></div>
        </form> 
    )
}

Search = connect(
  null,
  mapDispatchToProps
)(Search)

export default Search

  