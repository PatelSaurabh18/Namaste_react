import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");

    return (
      <>
        <h1> About Page </h1>
        <ProfileClass name={"first-child"} xyz={"abc"} />
        {/* <ProfileClass name={"second-child"} xyz={"abc"} /> */}

        <br></br>

        {/* <Profile name={"Saurabh"} xyz={"abc"} /> */}
      </>
    );
  }
}

export default About;

// const About2 = () => {
//   return (
//     <>
//       <h1> About Page </h1>

//        {/* <Outlet /> */}

//         <ProfileClass name={"saurabh"} xyz={"abc"}/>

//         <br>
//         </br>

//        <Profile name={"Saurabh"} xyz={"abc"}/>
//     </>
//   );
// };

// export default About2;
