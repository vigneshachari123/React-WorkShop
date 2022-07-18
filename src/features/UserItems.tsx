import React from "react";
import { UserManager } from "../manager/UserManager";
import { User } from "../model";
import { PostsManager } from "./../manager/PostsManager";
import { useSnapshot } from "valtio";
import { userState } from "../store";

interface Usertype {
  user: User;
}

export const UserItems = ({ user }: Usertype) => {
  const { user: userData } = useSnapshot(userState);
  const isSelected = userData?.id === user.id;

  const LoadUserDetails = async () => {
    await UserManager.getUserById(user.id);
    await PostsManager.getAllPosts(user);
  };

  return (
    <li
      className={`list-group-item${isSelected ? " active" : " "}`}
      onClick={() => LoadUserDetails()}
    >
      {user.name}
    </li>
  );
};
