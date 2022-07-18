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
    user?: User
}
export const userState = proxy<userStateType>({
users:[]
})
