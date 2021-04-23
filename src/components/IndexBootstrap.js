import React from "react";
import API from "../utils/API";
import Jumbotron from "./Jumbo";
import Navbar from "./navbar";
import Card from "./Card";

class Call extends React.Component {
  state = {
    employees: [],
    sreach: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    const employees = data.results.map((item) => ({
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.phone,
      dob: item.dob.date,
      image: item.picture.thumbnail,
    }));
    this.setState({ employees });
  };

  filterEmployees = (employees) => {
    if(employees.name.includes(this.state.search)){
      return true
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Jumbotron />
        <Navbar />
        <Card employees = {this.state.employees} />
      </>
    );
  }
}

export default Call;
