import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {

    const [{basket},dispatch]=useStateValue();


  return (
    <div className='header'>
    <Link to ="/">
        <img  className='header_logo' src='https://www.iboxsolutions.com/wp-content/uploads/2011/08/E-Commerce-Icon.png'></img>
    </Link>
    
    <div className='header_search'> 
         <input className='header_search_input' type="text"/>
         <SearchIcon className='header_search_icon'></SearchIcon>
    </div>
    <div className='header_nav'>
        <Link to= '/login'>
        <div className='header_option'>
            <span className='header_optionLineOne'>HEllo</span>
            <span className='header_optionLineTwo'>Sign In</span>
        </div>
        </Link>
        <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>Orders</span>
        </div>
        <div className='header_option'>
            <span className='header_optionLineOne'>Prime</span>
            <span className='header_optionLineTwo'>Subscription</span>
        </div>
        <Link to ="/checkout">
            <div className='header_option_basket'>
                <ShoppingBagIcon className='shoppingbag_icon'></ShoppingBagIcon>
                <span className='header_basket_count'>{basket?.length}</span>
            </div>
        </Link>
        
    </div>
    </div>
  )
}

export default Header

