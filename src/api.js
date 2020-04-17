export const API_URL = process.env.REACT_APP_BIBLE_API_URL;
const PRIVATE_KEY = process.env.REACT_APP_BIBLE_API_KEY;

export const SETTINGS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PRIVATE_KEY}`
    }
}