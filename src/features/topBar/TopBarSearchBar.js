import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import {getUser} from '../Auth/userSlice';
import {addResults} from '../results/resultsSlice';
import {useSelector, useDispatch} from 'react-redux';
import searchReddit from '../Auth/search';
import { useNavigate } from 'react-router-dom';


export default function TopBarSearchBar() {
    const [search, setSearch] = useState('');
      const [inputValue, setInputValue] = useState('');
      const [results, setResults] = useState({});
      const state = useSelector(getUser);

      const dispatch = useDispatch();
      const navigate = useNavigate();



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
            setResults(data);
            localStorage.setItem('searchData', data);
        })
        .catch((error) => {
        console.error("Error fetching post:", error);
        let cache = localStorage.getItem('searchData');
        setResults(cache);
        alert('Trouble Loading Content');
      });
    }

  }, [search, state.accessToken]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

function viewResult(index) {
  dispatch(addResults(results[index]));
  setSearch('');
  setInputValue('');
  navigate(`/results/${results[index].id}`);

}

    return (
        <>
        <div className='topBarSearchBar'>
            <label htmlFor='searchBar'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
        <input id='searchBar' type="text"  value={inputValue} onChange={handleChange} autoComplete='off' placeholder='Be The Imposta'/>
        </div>

        { search ?
        
        <div className='searchResults'>
        { results.length > 0 ? 
        
        
        <div className='resultItem'>
        {results.map((item, index) => 
          <div className='resultBox' key={index} onClick={() => viewResult(results.indexOf(item))}>
            <h3 className='displayName'>
              {item.author}
            </h3>
            <p className='displayBody'>{item.title}</p>
            <p className='displayBody'>{`Subreddit: ${item.subreddit}`}</p>

          </div>
        )}
        </div>
        
        : 
        <h1 className='no_results'>No Results</h1>}
        
        
        </div>
        
        
        
        : <></>}

        </>

    )
}