import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
function SearchResult( { 
    img, location, title, description, star, price, total
  }) {
    return (
        <div className='searchResult'>
          <img src={img} alt=''/>
         
            <div className='searchResult_info'>
                 
                <div className='searchResult_infoTop'>
                    <div className='searchResult_heart'><p>{location}</p>
                    <FavoriteBorderIcon /></div>
                   
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                    
                </div>
                <div className='searchResult_infoBottom'>
                    <div className='searchResult_stars'>
                        <StarIcon className='searchResult_star'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                        <div className='searchResult_price'>
                        <p>{price}</p>
                        <h3>{total}</h3>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
