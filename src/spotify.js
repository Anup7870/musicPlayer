import axios from 'axios';

const authhttpoint = "https://accounts.spotify.com/authorize?"
const clientId= "1fab860e3d7c4f3ebea0c715b5e35a39"
const redirectUri='https://music-player-chi-three.vercel.app'
// const redirectUri='http://localhost:5173'

const scopes = ['user-library-read', 'playlist-read-private']

export const loginEndpoint= `${authhttpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

// creating the base url 
const apiClient = axios.create({
    baseURL:"https://api.spotify.com/v1"
});

export const setClientToken =(token)=>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization= "Bearer " + token;
        return config;
    })
}

export default apiClient
