/* eslint-disable @next/next/no-img-element */

import React, { useEffect } from "react";
import ProfileComponent from "@/components/ProfileComponent";
import { useAuth } from "@/context/AuthContext";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <ProfileComponent />
    </div>
  );
};

export default Profile;
