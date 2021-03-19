import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class Todoservice{

    
    static async list(limit = null){

        let call = await axios.get(`${baseUrl}/todos`);    
        let todos = limit !== null ? call.data.slice(0, limit) : call.data;     
        let users = await axios.get(`${baseUrl}/users`);   

        for (let todo of todos) {
            for (const user of users.data) {
                if(user.id === todo.userId)
                    todo.user = user;
            }
        }
        return todos
    }
      
    static async create(data){
        return await axios.post(`${baseUrl}/todos`, data);
    }

 
    static async details(id){
        return await axios.get(`${baseUrl}/todos/${id}`);
    }

   
    static async update(id, data){
        return await axios.put(`${baseUrl}/todos/${id}`, data);
    }

   
    static async delete(id){
        return await axios.delete(`${baseUrl}/todos/${id}`);
    }
}

