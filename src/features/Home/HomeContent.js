import {getUser} from '../Auth/userSlice';
import {useSelector} from 'react-redux';
import './home.css';
import {getPost} from '../Auth/getPost';
import { useEffect, useState} from 'react';


export default function HomeContent() {
    const state = useSelector(getUser);
    const [postData, setPostData] = useState(null);
console.log(postData)

        useEffect(() => {
            if (state.isLoggedIn) {
           const Data =  getPost(state.accessToken);
           setPostData(Data)

        }

        }, [state.isLoggedIn, state.accessToken])


    return (
  
        <section className="content-display">

{   !postData ?   
    
    <>     
    <div className='content-display-header'>
                <h2>Title Not Found</h2>
            </div>
            <div className='content-display-body'>
                <p>Body goes here</p>
            </div>
            <div className='content-display-footer'>
                <p>Footer goes here</p>
            </div>
            </>  :
            <>
            
            </>
            }
            
        </section>

    )
}