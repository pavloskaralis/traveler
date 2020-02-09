import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import setFilter from '../../actions/setFilter.js'
import toggleTableIndex from '../../actions/toggleTableIndex.js'
import './Search.css'

const mapStateToProps = state => {
  return {
    index: state.tableIndex,
    tables: state.itinerary.dates
  }
}

const mapDispatchToProps = {
  setFilter,
  toggleTableIndex
}
// component has conditional css based on index or show page
function Search({setFilter, page, index, tables, toggleTableIndex}) {

  //conditional form submit 
  const submit = e => {
    e.preventDefault();
    
    //allow query to use -, /, or .
    let indexOf;
    if (tables) indexOf = tables.indexOf(query.value.replace(/\//g,'.').replace(/-/g,'.')); 
    //if query value has no match, reset to planning
    let queryValue; 
    if (tables) queryValue = indexOf > -1 ? indexOf : 0;

    switch(page) {
      case 'index': setFilter(query.value);
        break;
      case 'show': toggleTableIndex(queryValue);
        break;
    }
    //updates query value to submit value; required when query has no match and resets 
    if(page==='show')document.querySelector('input').value = tables[queryValue];
  }

  //required to update query value once submit is used; passed to left and right onClick
  const update = (num) => document.querySelector('input').value = tables[num];

  //conditional table arrow button values
  let left;
  let right;
  if(tables){
    left = index !== 0 ? index - 1 : tables.length - 1; 
    right = index !== (tables.length - 1 ) ? index + 1 : 0;  
  }

  //input reference
  let query;

  return (
      <form className={page === 'index' ? 'search-container-index' : 'search-container-show'} onSubmit={ submit }>
        {page === 'show' && <div className='search-submit' id='left' onClick={ ()=> {toggleTableIndex(left); update(left)}}></div>}
        {/* default search bar value displays current table on show page */}
        <input type='text' ref={node => query = node} defaultValue={page==='show' && tables ? tables[index] : ''}/>
        {page === 'show' && <div className='search-submit' id='right' onClick={ ()=> {toggleTableIndex(right); update(right)}}></div>}
        {page === 'index' && <div className='search-submit' onClick={e => {e.preventDefault(); setFilter(query.value)}}></div>}
      </form> 
  )
}

Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default Search

  