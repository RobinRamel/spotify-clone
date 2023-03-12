import SpotifyWebApi from "spotify-web-api-node";

const state = 'the_sTring_Of_ProtecTion'
const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
]

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirectUri: 'http://localhost:3000/api/auth/callback/spotify'
})

var authorizedURL = spotifyApi.createAuthorizeURL(scopes, state)

console.log(authorizedURL)

export default authorizedURL