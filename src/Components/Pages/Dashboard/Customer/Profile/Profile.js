import React from "react";
import useFirebase from "../../../../../hooks/useFirebase";

const Profile = () => {
  const { users } = useFirebase();
  return (
    <div>
      <h6>
        I am <span className="text-danger">{users?.displayName}</span>. My email
        address is <span className="text-danger">{users.email}</span>.
      </h6>
    </div>
  );
};

export default Profile;
