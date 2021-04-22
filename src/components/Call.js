import React from "react";
import API from "./utils/API";
import Card from "./card";

class Call extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return <Card
    employees={this.state.employees}
    />;
  }
}

export default Call;