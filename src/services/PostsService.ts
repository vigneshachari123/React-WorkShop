import api from "../services/ApiService"
import { postsType } from "../model";

export class PostsService{

   


    static getAllPosts = async (id :number) => {
    const response = await  api.get<postsType[]>(`posts/?userId=${id}`);
    return response.data;
    }
}
