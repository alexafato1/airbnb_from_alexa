import React from 'react'
import logo from './img/logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className='header'>
            <img className='header_icon'
               src={logo}
               alt='img'
              />
            <div className='header_center'>
               <input type='text'/>
               <SearchIcon/>
            </div>
            <div className='header_right'>
               <LanguageIcon/>
               <ExpandMoreIcon/>
               <Avatar/>
            </div>
        </div>
    )
}

export default Header
