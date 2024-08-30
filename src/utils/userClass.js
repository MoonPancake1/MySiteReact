import UserService from '../Api/UserService'

export default class userClass {

    constructor (access_token, refresh_token) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
    }

    async getAccessToken () {
        return this.access_token;
    }

    async getRefreshToken () {
        return this.refresh_token;
    }

    async getUserData() {
        return await UserService.getUserInfoByAccessToken(this.access_token);
    }

}