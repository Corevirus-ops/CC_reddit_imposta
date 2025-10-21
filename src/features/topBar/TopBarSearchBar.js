import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import {getUser} from '../Auth/userSlice';
import {useSelector} from 'react-redux';
import searchReddit from '../Auth/search';





export default function TopBarSearchBar() {
    const [search, setSearch] = useState('')
      const [inputValue, setInputValue] = useState('');
      const state = useSelector(getUser);



  useEffect(() => {

    const handler = setTimeout(() => {
      setSearch(inputValue);

    }, 500); 

  
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]); 

  useEffect(() => {
    if (search && state.accessToken) {
        searchReddit(state.accessToken, search)
        .then((data) => {
            console.log(data)
        })
    }

  }, [search, state.accessToken])

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
    return (
        <>
        <div className='topBarSearchBar'>
            <label htmlFor='searchBar'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
        <input id='searchBar' type="text"  value={inputValue} onChange={handleChange} autoComplete='off' placeholder='Be The Imposta'/>
        </div>

        { search ?
        
        <div className='searchResults'>
        <h1>{search}</h1>
        
        
        </div>
        
        
        
        : <></>}

        </>

    )
}