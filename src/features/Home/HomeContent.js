import {getUser} from '../Auth/userSlice';
import {useSelector} from 'react-redux';
import './home.css';
import {getPost} from '../Auth/getPost';
import { useEffect, useState} from 'react';



export default function HomeContent({loading}) {
    const [gatherPost, setGatherPost] = useState(false);
    const [postData, setPostData] = useState(null);
    const state = useSelector(getUser);



  useEffect(() => {


      const timer = setTimeout(() => {

    if (state.isLoggedIn) {
        getPost(state.accessToken)
        setGatherPost(true);
    } else if (!state.isLoggedIn) {
        setGatherPost(false);
        setPostData(null);
    }

      }, 1500); 
    console.log(postData)
    
      return () => clearTimeout(timer);
    


  }, [state.isLoggedIn, state.accessToken, gatherPost, postData])

  useEffect(() => {

    if (gatherPost) {
         let data = localStorage.getItem('postData');
         if (data) {
            data = JSON.parse(data);
            setPostData(data);
         console.log(data);
         }

    }

  }, [gatherPost])



    return (
  
        <section className="content-display">

{   loading ?   
    
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
            <h1>Yee conts here innit</h1>
            
            </>
            }
            
        </section>

    )
}