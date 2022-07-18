import { postsState,  userState, } from '../store/index';
import { postsType, User } from './../model/index';


export class Statemanager {
static setPostList = (postsList:postsType[]) => {
    postsState.postsList = postsList;
}

static setUsers =  (users : User[] ) => {
    userState.users = users
}

static setUserDetail =  (userDetails:User ) => {
    userState.user = userDetails 
}
}