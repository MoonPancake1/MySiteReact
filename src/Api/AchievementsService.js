import axios from "axios";

export default class AchievementsService {

    static async getAchievements(){
        const resp = await axios.get(`https://id.vchern.me/main/achievement/`);
        return resp.data;
    }

    static async getAchievementById(id = 0){
        const resp = await axios.get(`https://id.vchern.me/main/achievement/${id}/`);
        return resp.data;
    }

}