import React, { useState } from 'react'
import { Form, useFetcher } from 'react-router-dom'
import DatePicker from "react-datepicker";

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
import "react-datepicker/dist/react-datepicker.css";

const AddPet = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const openAnchor = Boolean(anchorEl);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    const cities = ['Yangon', 'Mandalay', 'Lashio'];
    const townships = {
        'Yangon': ['Hlaing', 'Mayangone', 'Yankin',],
        'Mandalay': ['Chanmyatharsi', 'Chanayetharsan'],
        'Lashio': ['Sipaw', 'Theini', 'Lashiogyi']
    }

    const [status, setStatus] = useState('');
    const [breed, setBreed] = useState('');
    const [city, setCity] = useState('');
    const [township, setTownship] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const fetcher = useFetcher();


    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }
    const handleBreedChange = (event) => {
        setBreed(event.target.value);
    }

    const handleCityChange = (event) => {
        setCity(event.target.value);
        setTownship('');
    }

    const handleTownshipChange = (event) => {
        setTownship(event.target.value);
    }

    return (
        <>
            <Button id='addPatient' variant="outlined" onClick={handleClickOpen} sx={{ width: 200, padding: 1, margin: 2, height: 30 }}>
                Add new patient
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add a new patient"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Enter new patient information below.
                    </DialogContentText>
                    <fetcher.Form method="post">
                        <div style={{ marginTop: '20px' }}>
                            <TextField name='petName' id="petName" label="Pet Name" variant="standard" />
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
                                    <MenuItem value='Picky Eater'>Picky Eater</MenuItem>
                                    <MenuItem value='Allergy'>Allergy</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <TextField id="standard-basic" label="Pawrent" name="pawrent" variant="standard" />
                            <FormControl ariant="standard" sx={{ m: 1, minWidth: 200, ml: 10 }}>
                                <InputLabel id="breed">Breed</InputLabel>
                                <Select sx={{ width: 200 }}
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
                                    <MenuItem value='Golden Retriever'>Golden Retriever</MenuItem>
                                    <MenuItem value='Bulldog'>Bulldog</MenuItem>
                                    <MenuItem value='Rotweiler'>Rotweiler</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{ display: 'flex', marginTop: '2.5rem' }}>
                            <FormControl sx={{ mr: '15px' }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel name="gender" value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel name="gender" value="female" control={<Radio />} label="Female" />
                                </RadioGroup>

                            </FormControl>
                            <div>
                                <DatePicker name="dob" value={birthDate} selected={birthDate} onChange={(date) => setBirthDate(date)} />
                            </div>

                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <TextField sx={{ mr: 10 }} id="standard-basic" name="contactPhoneNo" label="Contact Phone No" variant="standard" />
                            <TextField id="standard-basic" label="Address" name="address" variant="standard" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex' }}>
                            <FormControl ariant="standard" sx={{ m: 1, minWidth: 200, mt: 5 }}>
                                <InputLabel id="city">City</InputLabel>
                                <Select sx={{ width: 200, }}
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
                                        <MenuItem value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl ariant="standard" sx={{ ml: 10, minWidth: 200, mt: 5 }}>
                                <InputLabel id="township">Township</InputLabel>
                                <Select sx={{ width: 200 }}
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
                                        <MenuItem value={town}>{town}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </fetcher.Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddPet