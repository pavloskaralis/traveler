import React from 'react'
import history from '../../history'
import axios from 'axios'
import Search from '../Search/Search.js'
import Button from '../Button/Button.js'
import './Tools.css'

//tools conditionally render based on index or show page
function Tools({page}) {
    return (
        <div className='tools-container'>
            <div className='buttons-container'>
                {page === 'index' ? 
                    <> 
                        <Search/>
                        <Button type='+'/>
                    </> : 
                    <> 
                    </>
                }
            </div>
        </div>
    )
}

export default Tools

  