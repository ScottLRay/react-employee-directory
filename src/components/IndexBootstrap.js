import React from "react";
import API from "../utils/API";
import Jumbotron from "./Jumbo";
import Navbar from "./navbar";
import Card from "./Card";

class Call extends React.Component {
  state = {
    employees: [],
    search: "",
  };

  newEmployees = [...this.state.employees]

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
      id: item.login.uuid,
      gender: item.gender,
    }));
    this.setState({ employees });
  };

  filterEmployees = (employees) => {
    if (
      employees.name.toLowerCase().includes(this.state.search.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  sortEmployees = (newEmployees) => {
    newEmployees.sort(gender);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Jumbotron />
        <Navbar
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          sortEmployees={this.sortEmployees}
        />
        <Card
          employees={this.state.employees}
          filterEmployees={this.filterEmployees}
        />
      </>
    );
  }
}

export default Call;
