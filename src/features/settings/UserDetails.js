import {getUser} from '../Auth/userSlice';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {getUserInfo} from '../Auth/Auth';
import './settings.css'


export default function UserDetails() {
    const [userData, setUserData] = useState([])
    const state = useSelector(getUser);

    useEffect(() => {
        if (state.isLoggedIn) {
        getUserInfo(state.accessToken)
        .then((data) => {
            setUserData([data])
            console.log(data)
        })
        } else if (!state.isLoggedIn) {
            setUserData([])
        }


    }, [state.accessToken, state.isLoggedIn])

    return (
        <>
        { state.isLoggedIn && userData ? 
        
        <>

        {userData.map((item, index) => 
            <div key={index}>
                <div className='settings'>
                <h3>{`Username: ${item.name}`}</h3>
                <p>{`Coins: ${item.coins}`}</p>
                <p>{`Gold Creddits: ${item.gold_creddits}`}</p>
                <p>{`Friends: ${item.num_friends}`}</p>
                <p>{`Over 18?: ${item.over_18}`}</p>
                <p>{`Total Karma: ${item.total_karma}`}</p>
                <p>{`Is Verified?: ${item.verified}`}</p>
                </div>
            </div>
        )}
        </> 
        
        
        
        : <></>}
        </>
    )
}