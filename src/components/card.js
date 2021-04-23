import React from "react";
import moment from "moment"

function Card({ employees, filterEmployees }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr><th>No Employees!</th></tr>
        ) : (
          employees.filter(filterEmployees).map((employees) => (
            <tr key={employees.id} >
              <td>
                <img src={employees.image} alt={employees.name} loading="lazy"/>
              </td>
              <td>{employees.name}</td>
              <td>{employees.email}</td>
              <td>{employees.phone}</td>
              <td>{moment(employees.dob).format('MM-DD-YYYY')}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
export default Card;
