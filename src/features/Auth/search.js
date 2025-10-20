

export default async function searchReddit(accessToken, query) {

    const params = new URLSearchParams({
      q: query, 
      sort: 'relevance', 
      limit: 25, 
      t: 'all', 
      restrict_sr: true, 

    });

const url = `https://www.reddit.com/r/default/search.rss?${params.toString()}`;
  const payload = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

   try {
    const response = await fetch(url, payload);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch user: ${errorData.error || response.statusText}`);
    }
    
    const bodyPost = await response.json();

return bodyPost.data.children


  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}