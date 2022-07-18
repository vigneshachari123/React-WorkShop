import React from "react";
import { UserManager } from "../manager/UserManager";
import { User } from "../model";
import { PostsManager } from "./../manager/PostsManager";
import { useSnapshot } from "valtio";
import { UserTextHighlightState } from "../store";
import { Statemanager } from "../manager/StateManager";

interface Usertype {
  item: User;
}

export const UserItems = (item: Usertype) => {
  const selected = useSnapshot(UserTextHighlightState);
  const LoadUserDetails = async (id: number) => {
    await UserManager.getUserById(id);
    await PostsManager.getAllPosts(id);

    // to make text hightlight update the id
    Statemanager.settextHighlight(id);
  };

  return (
    <li
      className={`list-group-item${
        selected.userid === item.item.id ? " active" : " "
      }`}
      onClick={() => LoadUserDetails(item.item.id)}
    >
      {item.item.name}
    </li>
  );
};
