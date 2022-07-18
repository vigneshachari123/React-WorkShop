import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import { userState } from "../store";
import { UserManager } from "./../manager/UserManager";
import { UserItems } from "./UserItems";
export const UserList = () => {
  const { users } = useSnapshot(userState);

  const LoadUserList = async () => {
    UserManager.getAllUsers();
  };

  useEffect(() => {
    LoadUserList();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        {users.map((u) => (
          <UserItems user={u} />
        ))}
      </ul>
    </div>
  );
};
