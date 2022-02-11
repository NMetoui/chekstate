import React, { useEffect, useState } from "react";
import image from "./im1.jpg";

const Profile = ({ data }) => {
  const [show, setshow] = useState(true);
  const [time, settime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      settime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>My Profile</h1>
      {show && (
        <div>
          <h1>{data.fullName}</h1>
          <p>{data.bio}</p>
          <img src={image} width={300} height={300} />
          <p>{data.profession}</p>
        </div>
      )}

      <button onClick={() => setshow(!show)}>{show ? "Hide" : "show"}</button>
      <div>{time}</div>
    </div>
  );
};

export default Profile;
