import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faBell } from '@fortawesome/free-solid-svg-icons'; 

import TopBarNavUser from './TopBarNavUser';

export default function TopBarNav() {




    return (
                <nav className='topNav'>
            <ul>
                <li><Link to='post'><FontAwesomeIcon icon={faSquarePlus} style={{transform: 'scale(1.5)'}}/></Link>Create</li>
                <li><Link to='notifications'><FontAwesomeIcon icon={faBell} /></Link></li>
                <TopBarNavUser />
            </ul>
        </nav>

    )
}