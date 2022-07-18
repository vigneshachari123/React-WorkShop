import { proxy } from "valtio";
import { postsType,User} from "../model/index";


// creating state for postsList
interface postsStateType {
    postsList: postsType[];
    
}
 export const postsState =  proxy<postsStateType>({
    postsList : []
})

//creating state for UserList
 interface userStateType {
    users : User[];
}
export const userState = proxy<userStateType>({
users:[],
})

//creating state for userdetails 

interface userDetailsStateType{
    userDetails : User
}
export const userDetailsState = proxy<userDetailsStateType>({
    userDetails:{ id: 0,
        phone:    "",
        website: "",
        name:     "",
        email:   "" ,
        username: ""
    }
})

// crarte state highlight text

export const UserTextHighlightState =  proxy({
    userid : 0
})