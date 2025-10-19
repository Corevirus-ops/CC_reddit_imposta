
    
    import { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
import { getUser, logIn, logOut } from '../Auth/userSlice';
import { useState } from 'react';
import {getUserKey, getToken} from '../Auth/Auth';

export default function TopBarNavUser() {
        const [subMenu, setSubMenu] = useState(false);
    const state = useSelector(getUser)
    const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

let accessToken = localStorage.getItem('access_token');


useEffect(() => {
  if (code && !state.isLoggedIn) {
  getToken(code);
  }
}, [code])

useEffect(() => {
  if (accessToken && !state.isLoggedIn) {
     const userName = localStorage.getItem('userDataName');
     const userImage = localStorage.getItem('userDataImage');
     if (userName) {
      dispatch(logIn({
        userName: userName,
        image: userImage,
        token: accessToken
      }))
     }
  }
}, [accessToken])



    function handleLogin() {
getUserKey();

  };

  function handleLogout() {
      dispatch(logOut());
      setSubMenu(false); 
            localStorage.setItem('userDataName', '');
          localStorage.setItem('userDataImage', '');
            localStorage.setItem('access_token', '');
  }
return (
                    <li className='userIcon'>
                    <button onClick={() => setSubMenu(!subMenu)}><img src={state.isLoggedIn ? state.userIcon : 'freeUser.png'} alt='userLogo'/></button>
                    { subMenu && !state.isLoggedIn &&
                        (<>
                        <button className='subMenu' onClick={handleLogin}>Log In</button>
                        </>)
                    }
                    { subMenu && state.isLoggedIn && 
                    (
 
                        <div className='subMenu'>
                        <button>View Profile</button>
                        <p>{state.userName}</p>
                        <button onClick={handleLogout}>Log Out</button>
                        </div>

                    )}
                </li>

)
}