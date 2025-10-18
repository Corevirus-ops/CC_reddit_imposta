

import TopBarNavUser from './TopBarNavUser';

export default function TopBarNav() {




    return (
                <nav className='topNav'>
            <ul>
                <li>Chat</li>
                <li>Post</li>
                <li>Notifications</li>
                <TopBarNavUser />
            </ul>
        </nav>

    )
}