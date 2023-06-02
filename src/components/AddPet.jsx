import { useState } from 'react';
import { useFetcher } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Select } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';

const AddPet = ({ petList }) => {
  const cities = ['Yangon', 'Mandalay', 'Lashio'];
  const townships = {
    Yangon: ['Hlaing', 'Mayangone', 'Yankin'],
    Mandalay: ['Chanmyatharsi', 'Chanayetharsan'],
    Lashio: ['Sipaw', 'Theini', 'Lashiogyi'],
  };
  const [selectedRow, setSelectedRow] = useState(null);
  const [status, setStatus] = useState('');
  const [breed, setBreed] = useState('');
  const [city, setCity] = useState('');
  const [township, setTownship] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [petName, setPetName] = useState('');
  const [pawrent, setPawrent] = useState('');
  const [contactPhoneNo, setContactPhoneNo] = useState('');
  const [address, setAddress] = useState('');
  const fetcher = useFetcher();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const openAnchor = Boolean(anchorEl);
  const [action, setAction] = useState('newPet');
  const [id, setId] = useState('');

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
    setId(row.id);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    setTownship('');
  };

  const handleTownshipChange = (event) => {
    setTownship(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePetNameChange = (event) => {
    setPetName(event.target.value);
  };

  const handlePawrentChange = (event) => {
    setPawrent(event.target.value);
  };

  const handleContactPhoneNo = (event) => {
    setContactPhoneNo(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleEdit = (editedPet) => {
    handleClickOpen();
    setAction('update');
    if (editedPet) {
      setPetName(editedPet.petName);
      setStatus(editedPet.status);
      setPawrent(editedPet.pawrent);
      setGender(editedPet.gender);
      setBirthDate(new Date(editedPet.dob));
      setContactPhoneNo(editedPet.contactPhoneNo);
      setBreed(editedPet.breed);
      const parts = editedPet.address.split(',');
      setAddress(parts[0]);
      setTownship(parts[1].replace(/\s/g, ''));
      setCity(parts[2]);
      setId(editedPet.id);
    }
  };

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
      renderCell: (params) => (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(event) => handleClick(event, params.row)}
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
            <MenuItem onClick={() => {
              handleEdit(selectedRow);
            }}
            >
              <CreateIcon />
              Edit
            </MenuItem>

            <fetcher.Form action="/delete" method="post">
              <MenuItem onClick={(event) => {
                // eslint-disable-next-line
                if (!confirm('Delete this pet?')) {
                  event.preventDefault();
                }
              }}
              >
                <DeleteOutlineIcon />
                <input type="hidden" name="id" value={id} />
                <Button type="submit">Delete</Button>
              </MenuItem>
            </fetcher.Form>

          </Menu>
        </div>
      ),
    },
  ];

  return (
    <>
      <Button
        id="addPatient"
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          width: 200, padding: 1, margin: 2, height: 30,
        }}
      >
        Add new patient
      </Button>
      <fetcher.Form method="post">
        <Dialog
          disablePortal
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Add a new patient
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Enter new patient information below.
            </DialogContentText>

            <div style={{ marginTop: '20px' }}>
              <TextField name="petName" id="petName" label="Pet Name" onChange={handlePetNameChange} value={petName} variant="standard" />
              <input type="hidden" name="_action" value={action} />
              <input type="hidden" name="id" value={id} />
              <FormControl ariant="standard" sx={{ m: 1, minWidth: 200, ml: 10 }}>
                <InputLabel id="status">Status</InputLabel>
                <Select
                  id="status"
                  name="status"
                  value={status}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem key="Pickey Eater" value="Picky Eater">Picky Eater</MenuItem>
                  <MenuItem key="Allergy" value="Allergy">Allergy</MenuItem>

                </Select>
              </FormControl>
            </div>
            <div style={{ marginTop: '20px' }}>
              <TextField id="standard-basic" onChange={handlePawrentChange} label="Pawrent" name="pawrent" value={pawrent} variant="standard" />
              <FormControl ariant="standard" sx={{ m: 1, minWidth: 200, ml: 10 }}>
                <InputLabel id="breed">Breed</InputLabel>
                <Select
                  sx={{ width: 200 }}
                  labelId="breed"
                  id="breed"
                  name="breed"
                  value={breed}
                  label="Breed"
                  onChange={handleBreedChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem key="Golden Retriever" value="Golden Retriever">Golden Retriever</MenuItem>
                  <MenuItem key="Bulldog" value="Bulldog">Bulldog</MenuItem>
                  <MenuItem key="Rotweiler" value="Rotweiler">Rotweiler</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ display: 'flex', marginTop: '2.5rem' }}>
              <FormControl sx={{ mr: '15px' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" />
                  <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" />
                </RadioGroup>

              </FormControl>
              <div>
                <DatePicker name="dob" value={birthDate} selected={birthDate} onChange={(birthDate) => setBirthDate(birthDate)} />
              </div>

            </div>
            <div style={{ marginTop: '20px' }}>
              <TextField sx={{ mr: 10 }} id="standard-basic" onChange={handleContactPhoneNo} name="contactPhoneNo" value={contactPhoneNo} label="Contact Phone No" variant="standard" />
              <TextField id="standard-basic" label="Address" onChange={handleAddress} name="address" value={address} variant="standard" />
            </div>
            <div style={{ marginTop: '20px', display: 'flex' }}>
              <FormControl ariant="standard" sx={{ m: 1, minWidth: 200, mt: 5 }}>
                <InputLabel id="city">City</InputLabel>
                <Select
                  sx={{ width: 200 }}
                  labelId="city"
                  id="city"
                  name="city"
                  value={city}
                  label="City"
                  onChange={handleCityChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {cities.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl ariant="standard" sx={{ ml: 10, minWidth: 200, mt: 5 }}>
                <InputLabel id="township">Township</InputLabel>
                <Select
                  sx={{ width: 200 }}
                  labelId="township"
                  id="township"
                  name="township"
                  value={township}
                  label="Township"
                  onChange={handleTownshipChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {city && townships[city].map((town) => (
                    <MenuItem key={town} value={town}>{town}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={handleClose}>
              {action === 'update' ? 'Update' : 'Save'}
            </Button>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </fetcher.Form>
      <DataGrid
        rows={petList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </>
  );
};

AddPet.propTypes = {
  petList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AddPet;
