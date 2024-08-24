import axios from "axios";

export default class ProjectService {

    static async getUserInfoByUUID(uuid) {
        const resp = await axios.get(`https://id.vchern.me/id/users/get_user/${uuid}`)
        return resp.data;
    }

}