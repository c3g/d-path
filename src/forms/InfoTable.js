import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

function InfoTable({ answers }) {
  return(
    <Table striped bordered hover style={{ color:'white' }}>
      <thead>
        <tr>
          <th >Type</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Where is the organization?</td>
          <td>{answers.organization}</td>
        </tr>
        <tr>
          <td>Where is the data processed?</td>
          <td>{answers.dataProcessed}</td>
        </tr>
        <tr>
          <td>Where are the data users?</td>
          <td>{answers.dataUsers}</td>
        </tr>
        <tr>
          <td>Where are the data donors?</td>
          <td>{answers.dataDonors}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default InfoTable;
