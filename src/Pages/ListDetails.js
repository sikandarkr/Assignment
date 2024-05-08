import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchList } from "../Redux/action/getList";
const ListDetails = (props) => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="listDetails">
        <p className="page-title-details">Detail Page</p>
      <table>
        <tr>
          <th>Name</th>
          <th>State Province</th>
          <th>Country</th>
          <th>Country Code</th>
        </tr>
        <tbody>
          <tr>
            <td>{state.name}</td>
            <td>{state.state_province}</td>
            <td>{state.country}</td>
            <td>{state.alpha_two_code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListDetails;
