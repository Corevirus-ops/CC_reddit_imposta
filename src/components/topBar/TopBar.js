
    import React from 'react';
    import TopBarLogo from './TopBarLogo';
    import TopBarNav from './TopBarNav';
    import './topBar.css';


export default function TopBar() {
    return (
        <div className='PageHeader'>
            <TopBarLogo />
            <p>Loading Bar Goes Here</p>
            <TopBarNav  />
        </div>
    )
}