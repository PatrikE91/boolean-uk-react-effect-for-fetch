import { useEffect, useState } from "react";
import UserListItem from "./components/UsersListItem";

function UsersSection() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((users) => {
        setUser(users.results);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {users.map((user, index) => {
            return <UserListItem key={index} user={user} />;
          })}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
