import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location,",
      },
    };
    console.log("Child  -  constructor   ");
  }
//used for after initial render like useEffect[]
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PatelSaurabh18");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Child  -    ComponentDidMount   ");
  }

//used for every next render
  componentDidUpdate(){
      console.log("ComponentDidUpdate");
      
  }

  componentWillUnmount(){
    console.log("ComponentWill unmount");
    
  }

  render() {
    console.log("Child   -   render   ");

    return (
      <>
        <h1> Profile Class Component </h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h1>Name : {this.state?.userInfo?.name}</h1>
        <h2> Location : {this.state?.userInfo?.location}</h2>
        {/* <h3> {this.state.count}</h3>
        <h3> {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        > Click Me!
        </button> */}
      </>
    );
  }
}

export default Profile;
