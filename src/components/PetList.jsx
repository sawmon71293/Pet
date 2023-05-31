import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const PetList = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);


    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const rows = [
        { id: 1, petName: 'Snow', status: 'Picky Eater', pawrent: 'Su Su', breed: 'Beagle', gender: 'Male', dob: '12-12-2018', contactPhoneNo: '0218866636', address: 'Hlaing, Yangon' },

    ];

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'petName', headerName: 'Pet Name', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'pawrent',
            headerName: 'Pawrent',
            width: 130,
        },
        {
            field: 'breed',
            headerName: 'Breed',
            width: 160,

        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 160,

        },
        {
            field: 'dob',
            headerName: 'Date of Birth',
            width: 160,

        },
        {
            field: 'contactPhoneNo',
            headerName: 'Contact Phone No',
            width: 160,

        },
        {
            field: 'address',
            headerName: 'Address',
            width: 250,

        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            renderCell: () => (
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openAnchor}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><CreateIcon />Edit</MenuItem>
                        <MenuItem onClick={handleClose}><DeleteOutlineIcon />Delete</MenuItem>
                    </Menu>
                </div>
            ),
        },
    ];

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    )
}
