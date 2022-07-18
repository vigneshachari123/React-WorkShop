import React from "react";
import { useSnapshot } from "valtio";
import { userDetailsState } from "../store";

export default function UserDetail() {
  const detail = useSnapshot(userDetailsState);
  return (
    <div>
      <h1>UserDetails</h1>
      <ul className="list-group">
        <li className="list-group-item">{detail.userDetails.name}</li>
        <li className="list-group-item">{detail.userDetails.email}</li>
      </ul>
    </div>
  );
}
