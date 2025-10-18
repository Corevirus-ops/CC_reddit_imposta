import {Link} from 'react-router-dom';

export default function TopBarLogo() {
    return (
        <figure className='PageLogo'>
            <Link className='PageLogo'>
        <img src='logo512.png' alt='logo'/>
        <figcaption>Reddit Imposta</figcaption> 
        </Link>
        </figure>
    )
}