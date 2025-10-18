

    import TopBarLogo from './TopBarLogo';
    import TopBarNav from './TopBarNav';
    import TopBarSearchBar from './TopBarSearchBar';
    import './topBar.css';


export default function TopBar() {
    return (
        <div className='PageHeader'>

            <TopBarLogo />
            <TopBarSearchBar />
            <TopBarNav  />

        </div>
    )
}