import React from "react";

function Card({ employees }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={employees.name.first[0]}
        className="card-img-top"
        alt={employees.picture.thumbnail[0]}
      />
      <div className="card-body">
        <ul>
          <li>
            <strong>Name:</strong> {employees.name.first[0]}
          </li>
          <li>
            <strong>Phone</strong> {employees.phone[0]}
          </li>
          <li>
            <strong>Email</strong> {employees.email[0]}
          </li>
          <li>
            <strong>DOB</strong> {employees.dob[0]}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Card;
