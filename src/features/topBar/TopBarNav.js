import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faGear } from '@fortawesome/free-solid-svg-icons'; 

import TopBarNavUser from './TopBarNavUser';

export default function TopBarNav() {




    return (
                <nav className='topNav'>
            <ul>
                <li><Link to='post'><FontAwesomeIcon icon={faSquarePlus} style={{transform: 'scale(1.5)'}}/></Link>Create</li>
                <li><Link to='settings'><FontAwesomeIcon icon={faGear} /></Link></li>
                <TopBarNavUser />
            </ul>
        </nav>

    )
}