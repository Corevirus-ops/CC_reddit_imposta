
    
    import { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
import { getUser, logIn, logOut } from '../Auth/userSlice';
import { useState } from 'react';
import {getUserKey, getToken} from '../Auth/Auth';
import {useNavigate} from 'react-router-dom';

export default function TopBarNavUser() {
        const [subMenu, setSubMenu] = useState(false);
    const state = useSelector(getUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');




useEffect(() => {
  if (code && !state.isLoggedIn) {
  getToken(code);
  }
}, [code, state.isLoggedIn])

useEffect(() => {
if (!state.isLoggedIn) {
  const timer = setTimeout(() => {
    const userName = localStorage.getItem('userDataName');
    const userImage = localStorage.getItem('userDataImage');
    const accessToken = localStorage.getItem('access_token');
    if (userName && !state.isLoggedIn) {
      dispatch(logIn({
        userName: userName,
        image: userImage,
        token: accessToken
      }));
      navigate('/')
    }
  }, 500); 


  return () => clearTimeout(timer);

}
}, [state.isLoggedIn, dispatch, navigate])



    function handleLogin() {
getUserKey();

  };

  function handleLogout() {
      dispatch(logOut());
      setSubMenu(false); 
localStorage.removeItem('userDataName');
  localStorage.removeItem('userDataImage');
  localStorage.removeItem('access_token');
            navigate('/')
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