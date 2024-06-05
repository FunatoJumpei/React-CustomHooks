import { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0px 16px",
  margin: "8px",
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dl>名前</dl>
      <dd>{user.name}</dd>
      <dl>メール</dl>
      <dd>{user.email}</dd>
      <dl>住所</dl>
      <dd>{user.address}</dd>
    </div>
  );
};
