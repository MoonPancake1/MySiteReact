import axios from "axios";

export default class ProjectService {

    // PROJECTS
    static async getAll(skip = 0, limit = 10) {
        const resp = await axios.get(`https://id.vchern.me/main/projects/?skip=${skip}&limit=${limit}`);
        return resp.data;
    }

    static async getProjectById(id){
        const resp = await axios.get(`https://id.vchern.me/main/projects/${id}/`);
        return resp.data;
    }

    static async getAllTechs(){
        const resp = await axios.get(`https://id.vchern.me/main/projects/all_tech/`);
        return resp.data;
    }

    // COMMENTS
    static async getCommentsForProject(project_id){
        const resp = await axios.get(`https://id.vchern.me/main/comments/${project_id}/`)
        return resp.data;
    }

    static async createComment(token, project_id, comment){
        const resp = await axios.post(`https://id.vchern.me/main/comments/`,
            {
                project_id: project_id,
                comment: comment,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )

        console.log(resp.data);

        return resp.data;
    }

    // GRADES
    static async createGrade(token, project_id, grade) {
        console.log(grade)
        const resp = await axios.post(`https://id.vchern.me/main/grade/`,
            {
                project_id: project_id,
                grade: grade,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            }
        )
        return resp.data;
    }

    static async checkSelectGrade(token, project_id){
        try {
            const resp = await axios.get(
            `https://id.vchern.me/main/grade/check_grade/${project_id}`,
            {headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                }}
            )
            return resp.data;
        } catch (error) {
            console.log(error);
            return {status: error.response.status};
        }
    }
}