import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import Response from '../response';
import img from './g.png';
import {Link} from 'react-router-dom';
import Search from './Search.js';
import SearchIcon from '@mui/icons-material/Search';
import { Description } from '@mui/icons-material';
import {Image} from '@mui/icons-material';
import { LocalOffer } from '@mui/icons-material';
import { Room } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';


function SearchPage() {
    const [{term='tesla'}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    // const data = Response;

    console.log(data);
    
  return (
    <div className='searchPage'>
    <div className='searchPage__header'>
      <Link to ="/">
         <img className='searchPage__logo' src={img} alt="" />
      </Link>
      <div className='searchPage__headerBody'>
         <Search  hideButtons/>
         <div className='searchPage__options'>
              <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                    <SearchIcon />
                    <Link to='/all'>All</Link>
                  </div>
                  <div className='searchPage__option'>
                    <Description />
                    <Link to='/news'>News</Link>
                  </div>
                  <div className='searchPage__option'>
                    <Image />
                    <Link to='/images'>Images</Link>
                  </div>
                  <div className='searchPage__option'>
                    <LocalOffer />
                    <Link to='/shopping'>Shoping</Link>
                  </div>
                  <div className='searchPage__option'>
                    <Room />
                    <Link to='/maps'>Maps</Link>
                  </div>
                  <div className='searchPage__option'>
                    <MoreVert />
                    <Link to='/more'>More</Link>
                  </div>
              </div>
              <div className='searchPage__optionsRight'>
                  <div className='searchPage__option'>
                    <Link to='/settings'>Settings</Link>
                  </div>
                  <div className='searchPage__option'>
                    <Link to='/tools'>Tools</Link>
                  </div>
              </div>
         </div>
      </div>
    </div>
   {term &&  ( 
    <div className='searchPage__results'>
        <p className='searchPage__resultCount'>
          About {data?.searchInformation.formattedTotalResults} results ( {data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>
        {data?.items.map(item => (
          <div className='searchPage__result'>

           <a className='searchPage__resultLink'
           href={item.link}>
           {/* {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
             <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt="" />
           
           )} */}
            {item.displayLink} ▽
           </a>

           <a className='searchPage__resultTitle' href={item.link}>
            <h2>{item.title}</h2>
           </a>
           <p className='searchPage__resultSnippet'>
              {item.snippet}
           </p>
          </div>
   ))}
    </div>
   )}
      
    </div>
  )
}

export default SearchPage
