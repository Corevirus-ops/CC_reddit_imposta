import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 



export default function TopBarSearchBar() {
    const [search, setSearch] = useState('')
    return (
        <div className='topBarSearchBar'>
            <label htmlFor='searchBar'><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
        <input id='searchBar' type="text"  value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Be The Imposta'/>
        </div>

    )
}