import React from "react";
import { MdDelete, MdCached } from "react-icons/md";

export default function TableData({ data, onEdit, onDelete }) {
  const tableRows = Array.isArray(data)
    ? data.map((data, index) => {
        return (
          <tr id="row">
            <td id="firstname">{data.fname}</td>
            <td id="lastname">{data.lname}</td>
            <td id="email">{data.email}</td>
            <td>
              <MdCached
                className="updateBtn icon"
                onClick={() => onEdit(index)}
              />{" "}
              &nbsp;
              <MdDelete
                className="deleteBtn icon"
                onClick={() => onDelete(index)}
              />
            </td>
          </tr>
        );
      })
    : false;

  return (
    <div>
      <table className="table" align="center" id="table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
