export default async function searchReddit(accessToken, query, subreddit = 'all') {


    const params = new URLSearchParams({
        q: query,
        sort: 'relevance',
        limit: '25',
        t: 'all',
        restrict_sr: 'true' 
    });


    const url = `https://oauth.reddit.com/r/${encodeURIComponent(subreddit)}/search.json?${params.toString()}`;
    
    const payload = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'imposti/1.0' 
        }
    };

    try {
        const response = await fetch(url, payload);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Reddit API error: ${errorData.message || response.statusText}`);
        }

        const bodyPost = await response.json();
        

        return bodyPost.data?.children?.map(post => post.data) || [];

    } catch (error) {
        console.error('Error searching Reddit:', error);
        throw error;
    }
}