
import { PostsService } from './../services/PostsService';
import { Statemanager } from './StateManager';
//import { Statemanager } from './StateManager';

export class PostsManager{


    
    static getAllPosts = async (id:number) => {
     const postsList  =  await PostsService.getAllPosts(id);
     
     Statemanager.setPostList(postsList)
     
    }
}