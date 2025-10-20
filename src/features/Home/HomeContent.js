import {getUser} from '../Auth/userSlice';
import {useSelector} from 'react-redux';
import './home.css';
import {getPost} from '../Auth/getPost';
import { useEffect, useState} from 'react';
import HomeContents from './HomeContents';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';



export default function HomeContent({loading}) {
    const [gatherPost, setGatherPost] = useState(false);
    const [postData, setPostData] = useState(null);
    const state = useSelector(getUser);




useEffect(() => {
  if (state.isLoggedIn && !gatherPost) {
    getPost(state.accessToken)
      .then((data) => {
        console.log(data)
        setPostData(data);
        setGatherPost(true);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setGatherPost(false);
      });
  } else if (!state.isLoggedIn) {
    setGatherPost(false);
    setPostData(null);
  }
}, [state.isLoggedIn, state.accessToken, gatherPost, postData]);

    
function openUser(target) {
    window.open(`https://www.reddit.com/${target}`, "_blank");
}



    return (
  
        <section className="content-display">

{   loading ?   
    
    <>     
            <h1>Waiting for user to LogIn</h1>
            </>  :
                     <>    
                     { postData ? postData.map((item, index) => (
                        <div key={index} className='redditScreen'>
                            <div className='redditBox'>
                                <h3 className='displayName'>
                                    <img onClick={() => openUser(item.data.display_name_prefixed)} className='displayLogo' src={item.data.icon_img ? item.data.icon_img : 'freeUser.png'} alt={`logo for ${item.data.display_name_prefixed}`}/> 
                                    {item.data.display_name_prefixed}
                                </h3>
                            <p className='displayBody'>{item.data.public_description}</p>
                            <HomeContents url={item.data.banner_background_image} alt={item.data.advertiser_category} />
                            <div className='voteButtons'>
                                <FontAwesomeIcon icon={faArrowUp} />
                                <FontAwesomeIcon icon={faArrowDown} />

                            </div>
                            </div>
                        </div>
                     ))  : <></>} 

            </>
                }
            
        </section>

    )
}