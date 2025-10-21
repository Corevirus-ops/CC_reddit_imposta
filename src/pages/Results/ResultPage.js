
import {removeResults, getResults} from '../../features/results/resultsSlice';
import {useSelector} from 'react-redux';

export default function ResultPage() {
    const state = useSelector(getResults);

    function openUser() {
    window.open(`https://www.reddit.com/user/${state.author}`, "_blank");
}

function openPost() {
    window.open(`https://www.reddit.com/${state.permalink}`, "_blank");
}

return (
    <div className='redditScreen'>
        <div className='redditBox'>
            <h3 className='displayName displayLogo mouseHover' onClick={openUser}>{state.author}</h3>
            <p className='displayBody mouseHover' onClick={openPost}>{state.title}</p>
            <ul>
                <li>{`Comments: ${state.num_comments}`}</li>
                <li>{`Crosspost: ${state.num_crossposts}`}</li>
                <li>Reports:{" " + state.num_reports ||" " + 0}</li>
            </ul>

        </div>
    </div>
)

}