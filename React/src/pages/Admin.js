import { useCallback } from "react";
import { Link } from "react-router-dom";
import "../components/Navbar.scoped.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import axios from "axios"
import { useState ,useEffect} from "react";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
} from '@mui/x-data-grid-generator';

const roles = ['Market', 'Finance', 'Development'];
const randomRole = () => {
  return randomArrayItem(roles);
};
// const [dataDelete, setdataDelete] = useState([]);
// useEffect(() => {
//   axios.get("http://localhost:3001/admin").then((response) => {
//     setdataDelete(response.data);
//     console.log("update");
//   }).catch((err) => { console.log(err) });
// }, []);
// console.log(dataDelete)
// const Rows = dataDelete.map((data, index) => {
//   return {
//     id: data.infoCard.id,
//     name: data.infoCard.name,
//     address: data.infoCard.address,
//     lat: data.lat,
//     lng: data.lng,
//     restroomtype: data.type.color,
//   }
// })

// const initialRows = [
//   {
//     id: randomId(),
//     name: "Hello",
//     address: "address",
//     lat: "112",
//     lng: "456",
//     restroomtype: "ฟรีโว้ย",
//   }
// ];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}



const Admin = () => {
  const [pin, setpin] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/admin").then((response) => {
      setpin(response.data);
      console.log("update");
    }).catch((err) => { console.log(err) });
  }, []);
  
  console.log(pin)
  // const deletepin = (id) =>{
  //   axios.delete(`http://localhost:3001/admin/${id}`).then((response)=>{
  //   setpin(
  //     pin.filter((val)=>{
  //       return id != id;
  //     })
  //   )  
  //   })
  // }
  // const Hello = pin.map((data, index) => {
  //   return  { 
  //     id: randomId(),
  //     name: data?.infoCard[0]?.name,
  //     address: data?.infoCard[0]?.address,
  //     lat: data.lat.toString(),
  //     lng: data.lng.toString(),
  //     restroomtype: data?.type?.color,
  //   }
  // })
  
  // console.log(pin[0])
  // const initialRows1 = [
  //   {
  //     id: pin[0].infoCard[0]?.id,
  //     name: pin[0].infoCard[0]?.name,
  //     address: pin[0].infoCard[0].address,
  //     lat: pin[0].lat,
  //     lng: pin[0].lng,
  //     restroomtype: pin[0].type.color,
  //   }
  // ];
  // console.log(initialRows1)
  const initialRows = [
    {
      id: randomId(),
      name: "Hello",
      address: "address",
      lat: "112",
      lng: "456",
      restroomtype: "ฟรีโว้ย",
    },
    {
      id: randomId(),
      name: "Hello",
      address: "address",
      lat: "112",
      lng: "456",
      restroomtype: "ฟรีโว้ย",
    },
    {
      id: randomId(),
      name: "Hello",
      address: "address",
      lat: "112",
      lng: "456",
      restroomtype: "ฟรีโว้ย",
    },
    {
      id: randomId(),
      name: "Hello",
      address: "address",
      lat: "112",
      lng: "456",
      restroomtype: "ฟรีโว้ย",
    },
    {
      id: randomId(),
      name: "Hello",
      address: "address",
      lat: "112",
      lng: "456",
      restroomtype: "ฟรีโว้ย",
    }
  ];
  useEffect(()=>{
    setRows( pin.map((data, index) => {
      return  { 
        id: randomId(),
        name: data?.infoCard[0]?.name,
        address: data?.infoCard[0]?.address,
        lat: data.lat.toString(),
        lng: data.lng.toString(),
        restroomtype: data?.type?.color,
      }
    }))
  },[pin])
  console.log(initialRows)
  const [rows, setRows] = React.useState([]);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    // axios.delete(`http://localhost:3001/admin/${id}`).then((response)=>{
    setRows(rows.filter((row) => row.id !== id));
    // })
  };
  // const deletepin = (id) =>{
  //   axios.delete(`http://localhost:3001/admin/${id}`).then((response)=>{
  //   setpin(
  //     pin.filter((val)=>{
  //       return id != id;
  //     })
  //   )  
  //   })
  // }
  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'address', headerName: 'Address', width: 180, editable: true },
    { field: 'lat', headerName: 'Latitude', width: 180, editable: true },
    { field: 'lng', headerName: 'Longitude', width: 180, editable: true },
    {
      field: 'restroomtype',
      headerName: 'Restroomtype',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['Free', 'Must Paid', 'Toilets in stores'],
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={ 
              
              handleDeleteClick(id)
            }
            color="inherit"
          />,
        ];
      },
    },
  ];



  return (
    <div>
      <header>
        <h3>
          <img src="/logo.png" className="logo" />
        </h3>
      </header>
      <div style={{ display: 'grid', height: '100vh', placeItems: 'center' }}>
        <div style={{ height: '90%', width: '60%', alignSelf: 'flex-start' }}>
          <Box
            sx={{
              height: 500,
              width: '100%',
              '& .actions': {
                color: 'text.secondary',
              },
              '& .textPrimary': {
                color: 'text.primary',
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              editMode="row"
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              slots={{
                toolbar: EditToolbar,
              }}
              slotProps={{
                toolbar: { setRows, setRowModesModel },
              }}
            />
          </Box>
        </div>
      </div>
    </div>
    
  );

}

export default Admin;
