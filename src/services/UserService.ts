import api from "../services/ApiService"
export class UserService {
    static getAllUsers  =  async () =>{
       try{
        const response =  await api.get(`/users`);
        return response.data;
       }catch(e){
        console.log(`something went wrong while  performing getAllUsers ${e}`)
       }
    }

    static getUserById = async (id:number) =>{
         const response = await api.get(`/users/${id}`);
         
         return response.data;

    }
}