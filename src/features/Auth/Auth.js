


const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

        const redirectUri = 'http://192.168.1.196:3000/';
const clientId = 'jmLveRbd0_5HhFr0hfFu0A';
const scope = 'identity history mysubreddits read save submit vote wikiedit wikiread';
const authUrl = new URL("https://www.reddit.com/api/v1/authorize")
const clientSecret = 'eXmDY5ZFSe2FGLGsGPTdmQ2gs6fJIQ'; 
const authHeader = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;


export function getUserKey() {
const randomString = generateRandomString(16);
    const params =  {
    response_type: 'code',
      client_id: clientId,
    state: randomString,
  duration: 'temporary',
  scope: scope,
  redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

}

export const getToken = async (code) => {

  const url = "https://www.reddit.com/api/v1/access_token";
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': authHeader,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
    }),
  }

  const body = await fetch(url, payload);
  const response = await body.json();


  localStorage.setItem('access_token', response.access_token);
setUserLoggedIn(response.access_token)

}

async function setUserLoggedIn(accessToken) {
  

  const url = 'https://oauth.reddit.com/api/v1/me';
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
    
    const userData = await response.json();
      localStorage.setItem('userDataName', userData.name);
      let profileImage = userData.icon_img;
    

    if (profileImage) {
      const Index = profileImage.indexOf('.jpg' || '.png');
      if (Index !== -1) {
        profileImage = profileImage.substring(0, Index + 4);
      }

      profileImage = profileImage.replace(/&amp;/g, '&');
    }
          localStorage.setItem('userDataImage', profileImage);

  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}


export async function getUserInfo(accessToken) {
  

  const url = 'https://oauth.reddit.com/api/v1/me';
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
    
    const userData = await response.json();
    return userData;


  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}




