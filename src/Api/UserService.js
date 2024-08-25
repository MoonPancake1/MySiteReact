import axios from "axios";

export default class ProjectService {

    static async getUserInfoByUUID(uuid) {
        let resp = await axios.get(`https://id.vchern.me/id/users/get_user/${uuid}`)
        const urlStatic = "https://id.vchern.me/"
        resp.data.avatar = `${urlStatic}${resp.data.avatar}`
        return resp.data;
    }

}