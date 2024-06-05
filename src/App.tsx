import axios from "axios";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { useState } from "react";
import { UserProfile } from "./types/userProfile";

//sample
// const user = {
//   id: 1,
//   name: "test",
//   email: "test@aaa.com",
//   address: "testtest",
// };

function App() {
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onClickFeatchUser = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users111")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: `${user.email}`,
          address: `${user.address.street}${user.address.suite}${user.address.city}`,
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
