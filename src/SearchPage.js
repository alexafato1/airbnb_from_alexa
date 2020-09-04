import React from 'react';
import {Button} from'@material-ui/core'
import './SearchPage.css';
import SearchResult from './SearchResult.js';

function SearchPage() {
    return (
        <div className='searchPage'>
             <div className='searchPage_info'>
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                 Type of place
                </Button>
                <Button variant='outlined'>
                 Price
                </Button>
                <Button variant='outlined'>
                 Rooms and beds
                </Button>
                <Button variant='outlined'>
                 More filters
                </Button>
             </div>
             <SearchResult
               img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rustic-sunroom-bar-cart-1563891494.jpg?crop=1.00xw:0.672xh;0,0.328xh&resize=980:*' 
               location='Private room in center of London' 
               title='Stay at this spacious Edwardian House' 
               description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - free parking - Washing Machine' 
               star={4.73} 
               price='$30/ night' 
               total='$117 total'
             />
                <SearchResult
               img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/warm-beige-sunroom-1563891392.jpg?crop=0.607xw:1.00xh;0.152xw,0&resize=980:*' 
               location='Private room in center of London' 
               title='Stay at this spacious Edwardian House' 
               description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - free parking - Washing Machine' 
               star={4.73} 
               price='$30/ night' 
               total='$117 total'
             />
        </div>
    )
}

export default SearchPage
