import axios from "axios";

export default class ProjectService {

    static async getUserInfoByUUID(uuid) {
        let resp = await axios.get(`https://id.vchern.me/id/users/get_user/?user_uuid=${uuid}`,)
        return resp.data;
    }

    static async getUserInfoByAccessToken(access_token) {
        const resp = await axios.get("https://id.vchern.me/id/users/me",
            {
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${access_token}`
                },
            })
        return resp.data;
    }

}