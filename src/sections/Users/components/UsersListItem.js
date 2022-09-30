import { useEffect, useState } from "react";

function UserListItem(props) {
  const { user } = props;
  return (
    <li
      className={user.gender === "male" ? "bg-blue" : "bg-pink"}
      key={user.id.value}
    >
      <img src={user.picture.large} alt={user.name.last + user.name.first} />
      <h3>{user.name.title + " " + user.name.last + " " + user.name.first}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}

export default UserListItem;
