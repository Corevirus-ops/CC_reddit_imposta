import {useState} from 'react';


export default function TopBarSearchBar() {
    const [search, setSearch] = useState('')
    return (
        <div className='topBarSearchBar'>
        <input type="text" id='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Be The Imposta'/>
        </div>

    )
}