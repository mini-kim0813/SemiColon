import axios from 'axios';

function registerUser(userData) {
    // 요청할 URL
    const url = '/api/signUp';
    return axios.post(url, userData);
}

// 함수 export
export { registerUser };