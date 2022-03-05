import React, { useEffect, useState } from "react";
import { FirstImage } from "./Images/FirstImage";
import { Table } from "react-bootstrap";
var axios = require('axios');

export const Main = () => {
  const [ogUsers,setOgUsers]=useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:5000',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setOgUsers(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  let width = window.innerWidth;
  return (
    <div className="bg-dark" style={{ fontFamily: "sans-serif" }}>
      <FirstImage width={width - 20} />
      <div className="table-responsive">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy / Sell Price</th>
              <th scope="col">Volume</th>
              <th scope="col">Base Unit</th>
            </tr>
          </thead>
          <tbody>
          {
            ogUsers.map((check, index) => {
              return(
                <tr>
                  <td scope="row">index</td>
                  <td>{check.name}</td>
                  <td>{check.last}</td>
                  <td>`${check.buy} / ${check.sell}`</td>
                  <td className="text-info">{check.volume}</td>
                  <td className="text-info">{check.base_unit}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};
