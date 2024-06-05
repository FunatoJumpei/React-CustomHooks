import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";
import { useAllUsers } from "./hooks/useAllUsers";

//sample
// const user = {
//   id: 1,
//   name: "test",
//   email: "test@aaa.com",
//   address: "testtest",
// };

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFeatchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFeatchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
