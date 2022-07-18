
import { User } from '../model';
import { PostsService } from './../services/PostsService';
import { Statemanager } from './StateManager';
//import { Statemanager } from './StateManager';

export class PostsManager{


    
    static getAllPosts = async (user : User) => {
     const postsList  =  await PostsService.getAllPosts(user.id);
     Statemanager.setPostList(postsList)
     
    }
}