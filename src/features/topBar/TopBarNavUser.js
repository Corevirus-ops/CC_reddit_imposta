
    import { useDispatch, useSelector } from 'react-redux';
import { getUser, logIn, logOut } from '../Auth/userSlice';
import { useState } from 'react';

export default function TopBarNavUser() {
        const [subMenu, setSubMenu] = useState(false);
    const [userInput, setUserInput] = useState('');
    const state = useSelector(getUser)
    const dispatch = useDispatch();

    function handleLogin() {
    if (userInput.trim()) { 
      dispatch(logIn(userInput));
      setUserInput(''); 
      setSubMenu(false); 
    } else {
      alert('Please enter a valid username'); 
    }
  };

  function handleLogout() {
      dispatch(logOut());
      setUserInput(''); 
      setSubMenu(false); 
  }
return (
                    <li className='userIcon'>
                    <button onClick={() => setSubMenu(!subMenu)}><img src={state.isLoggedIn ? state.userIcon : 'freeUser.png'} alt='userLogo'/></button>
                    { subMenu && !state.isLoggedIn &&
                        (<>
                        <input className='subMenu' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                        <button className='subMenu' onClick={handleLogin}>Log In</button>
                        </>)
                    }
                    { subMenu && state.isLoggedIn && 
                    (
 
                        <div className='subMenu'>
                        <button>View Profile</button>
                        <p>{state.userName}</p>
                        <button className='subMenu' onClick={handleLogout}>Log Out</button>
                        </div>

                    )}
                </li>

)
}