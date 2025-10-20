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
    const [category, setCategory] = useState('');
    const state = useSelector(getUser);



useEffect(() => {
  if (state.isLoggedIn && !gatherPost) {
    getPost(state.accessToken, category)
      .then((data) => {
        console.log(data)
        setPostData(data);
        localStorage.setItem('postData', data);
        setGatherPost(true);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        let cache = localStorage.getItem('postData');
        setPostData(cache);
        alert('Trouble Loading Content')
       // setGatherPost(false);
      });
  } else if (!state.isLoggedIn) {
    setGatherPost(false);
    setPostData(null);
  }
}, [state.isLoggedIn, state.accessToken, gatherPost, postData, category]);

    
function openUser(target) {
    window.open(`https://www.reddit.com/${target}`, "_blank");
}

function changeCategory(type) {
  setCategory(type);
  setGatherPost(false);
}



    return (
  
        <section className="redditScreen">

{   loading ?   
    
    <>     
            <h1>Waiting for user to LogIn</h1>
            </>  :
                     <>   <div className="redditScreen">
      <label htmlFor="myDropdown">Choose a category:</label>
      <select
        id="myDropdown"
        name="selectedOption"
        onChange={(e) => changeCategory(e.target.value)}
        value={category}
      >
        <option value="popular">Popular</option>
        <option value="default">Default</option>
        <option value="new">New</option>
      </select>
    </div>

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