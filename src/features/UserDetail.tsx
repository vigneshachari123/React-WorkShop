import React from "react";
import { useSnapshot } from "valtio";
import { userState } from "../store";

export default function UserDetail() {
  const { user } = useSnapshot(userState);
  return (
    <div>
      <h1>UserDetails</h1>
      <ul className="list-group">
        <li className="list-group-item">{user?.name}</li>
        <li className="list-group-item">{user?.email}</li>
      </ul>
    </div>
  );
}
