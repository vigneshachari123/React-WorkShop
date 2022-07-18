import { postsState,  userDetailsState, UserTextHighlightState } from '../store/index';
import { postsType, User } from './../model/index';


export class Statemanager {
static setPostList = (postsList:postsType[]) => {
    postsState.postsList = postsList;
}

static setUserDetail =  (userDetails:User ) => {
    userDetailsState.userDetails = userDetails 
}

static settextHighlight =  (num:number) =>{
    UserTextHighlightState.userid =  num
}
}