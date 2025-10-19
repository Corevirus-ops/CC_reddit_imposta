

export async function getPost(accessToken) {
      const url = 'https://oauth.reddit.com/subreddits/default';
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
    return bodyPost.data.children;


    


  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}