export let accessToken = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : null;

export const setAccessToken = (token) => {
    localStorage.setItem("access_token", token)
    accessToken = token;
}

export const getAccessToken = () => {
    return localStorage.getItem("access_token");
}