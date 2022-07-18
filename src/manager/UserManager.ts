import { UserService } from "../services/UserService"
import { userState } from "../store";
import { Statemanager } from "./StateManager";
export class UserManager{
    static getAllUsers = async () => {
        const users = await UserService.getAllUsers();
        userState.users =users;
    }

    static getUserById =  async (id:number) => {
       

     const response =   await UserService.getUserById(id);
     
      Statemanager.setUserDetail(response);
    }
}