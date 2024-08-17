import axios from "axios";

export default class ProjectService {

    static async getAll(skip = 0, limit = 10) {
        const resp = await axios.get(`https://id.vchern.me/main/projects/?skip=${skip}&limit=${limit}`);
        return resp.data;
    }

    static async getProjectById(id){
        const resp = await axios.get(`https://id.vchern.me/main/projects/${id}/`);
        return resp.data;
    }

    static async getCommentsForProject(project_id){
        const resp = await axios.get(`https://id.vchern.me/main/comments/${project_id}/`)
        return resp.data;
    }

}