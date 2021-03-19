import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export class UserService{

    /**
     * List of users
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async list(){
        let response = await axios.get(`${baseUrl}/users`);
        let users = response.data;

        for (let user of users) {
            let responseTodo = await axios.get(`${baseUrl}/users/${user.id}/todos`);
            let todos = responseTodo.data;
            user.nbrTodos = todos.length;
        }
        return users;
    }

    /**
     * Details of user
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    static async details(id){
        return await axios.get(`${baseUrl}/users/${id}`);
    }
}
