import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
  });

  console.log("Render");

  return (
    <div>
      <h1>Profile</h1>
      <h1> Name : {props.name}</h1>
      <h2> XYZ : {props.xyz}</h2>
      <h3> {count}</h3>
      <h3> {count2}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count + 2);
        }}
      >
        Click Me!
      </button>
     { console.log("inside Profle ")}
    </div>
  );
};

export default Profile;
