import React from "react";

function Card({ employees }) {
  return (
    <table className="table table-striped">
      <thead>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">DOB</th>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <h2>No Employees!</h2>
        ) : (
          employees.map((employees) => (
            <tr>
              <td>
                <img src={employees.image} />
              </td>
              <td>{employees.name}</td>
              <td>{employees.email}</td>
              <td>{employees.phone}</td>
              <td>{employees.dob}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
export default Card;
