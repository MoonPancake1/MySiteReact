import axios from 'axios';

export default class AuthService {

    static async login(username, password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        const resp = await axios.post(
            "https://id.vchern.me/id/login/tokens/", params)

        localStorage.setItem("access_token", resp.data.access_token);
        localStorage.setItem("refresh_token", resp.data.refresh_token);

        return resp.data;
    }

    static async userData(token) {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        const resp = await axios.get('https://id.vchern.me/id/users/me',
            {
                headers: headers,
            })
        return resp.data;
    }

}