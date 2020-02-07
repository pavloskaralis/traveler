import React from 'react'
import { connect } from 'react-redux'
import setFilter from '../../actions/setFilter.js'
import './Search.css'

const mapDispatchToProps = {
  setFilter
}

function Search({setFilter, page}) {
// setFilter
  let query;
    return (
        <form className={page === 'index' ? 'search-container-index' : 'search-container-show'} onSubmit={e => {e.preventDefault(); setFilter(query.value)}}>
          {page === 'show' && <div className='search-submit' id='left' onClick={e => {e.preventDefault(); setFilter(query.value)}}></div>}
          <input type={page === 'text'} ref={node => query = node} autoFocus/>
          <div className='search-submit' id={page === 'show' ? 'right' : ''} onClick={e => {e.preventDefault(); setFilter(query.value)}}></div>
        </form> 
    )
}

Search = connect(
  null,
  mapDispatchToProps
)(Search)

export default Search

  