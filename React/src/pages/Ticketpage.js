import { useCallback } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.scoped.css"
import "./Ticketpage.css"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormPropsTextFields from "../components/writeinfo"

const Ticket = () => {
  // function getFullName(params) {
  //   return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
  // }

  // function setFullName(params) {
  //   const [firstName, lastName] = params.value.toString().split(' ');
  //   return { ...params.row, firstName, lastName };
  // }

  // function parseFullName(value) {
  //   return String(value)
  //     .split(' ')
  //     .map((str) => (str.length > 0 ? str[0].toUpperCase() + str.slice(1) : ''))
  //     .join(' ');
  // }
  const columns = [
    { field: 'reportid', headerName: 'Report ID', width: 130, editable: false },
    { field: 'description', headerName: 'Description', width: 130, editable: false },
    { field: 'name', headerName: 'Report by', width: 130, editable: false },
    { field: 'datecreate', headerName: 'Create on', width: 130, editable: false },
    { field: 'lastdate', headerName: 'Last Update', width: 130, editable: false },
    { field: 'status', headerName: 'Status', width: 130, editable: false },
    // { field: 'firstName', headerName: 'First name', width: 130, editable: false },
    // { field: 'lastName', headerName: 'Last name', width: 130, editable: false },

    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   width: 160,
    //   editable: false,
    //   valueGetter: getFullName,
    //   valueSetter: setFullName,
    //   valueParser: parseFullName,
    //   sortComparator: (v1, v2) => v1.toString().localeCompare(v2.toString()),
    // },
  ];

  const defaultRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', reportid: 'domeza001', description: 'Delete pin', status: 'Sending', name: 'Domekung', datecreate: '12/12/23',lastdate:'24/12/23'},
    { id: 1, lastName: 'Snow', firstName: 'Jon', reportid: 'domeza001', description: 'Delete pin', status: 'Sending', name: 'Domekung', datecreate: '12/12/23',lastdate:'24/12/23'},
    { id: 1, lastName: 'Snow', firstName: 'Jon', reportid: 'domeza001', description: 'Delete pin', status: 'Sending', name: 'Domekung', datecreate: '12/12/23',lastdate:'24/12/23'},
    { id: 1, lastName: 'Snow', firstName: 'Jon', reportid: 'domeza001', description: 'Delete pin', status: 'Sending', name: 'Domekung', datecreate: '12/12/23',lastdate:'24/12/23'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
    { id: 4, lastName: 'Stark', firstName: 'Arya' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  ];

  return (
    <div>
      <header>
        <h3>
          <img src="/logo.png" className="logo" />
        </h3>
      </header>
      < div className="grid">
        
        <div className="datapro">
          <DataGrid rows={defaultRows} columns={columns} />
        </div>
        <div>
          <FormPropsTextFields/>
        </div>
      </div>     
    </div>
  );

}

export default Ticket;
