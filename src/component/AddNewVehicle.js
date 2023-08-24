import React, { useState } from 'react';
import {FormControl, FormLabel, TextField, Button, Box} from '@mui/material';

const AddNewVehicle = () => {
    // Initialize state to store form data
    const [formData, setFormData] = useState({
        id: '',
        ownerName: '',
        vehicleName: '',
        vehicleDescription: '',
        serviceStatus: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Post Vehicles API implementation
        const url = "http://localhost:8081/vehicles";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.status === 201 || response.status === 200) {
                    window.alert("Success");
                } else {
                    window.alert("Something went wrong");
                }
            })
            .catch(e => {
                console.log("e", e);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Vehicle Id</FormLabel>
                    <TextField
                        name = "id"
                        value={formData.id}
                        onChange={handleInputChange}
                        size="small"
                        required
                    />
                    <FormLabel>Owner name</FormLabel>
                    <TextField
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        size="small"
                        required
                    />
                    <FormLabel>Vehicle Name</FormLabel>
                    <TextField
                        name = "vehicleName"
                        value={formData.vehicleName}
                        onChange={handleInputChange}
                        size="small"
                        required
                    />
                    <FormLabel>Vehicle Description</FormLabel>
                    <TextField
                        name="vehicleDescription"
                        value={formData.vehicleDescription}
                        onChange={handleInputChange}
                        size="small"
                        required
                    />
                    <FormLabel>Service Status</FormLabel>
                    <TextField
                        name="serviceStatus"
                        value={formData.serviceStatus}
                        onChange={handleInputChange}
                        size="small"
                        required
                    />
                    <Button type="submit" variant="contained" color="success" >Add Vehicle</Button>
                </FormControl>
            </form>
        </div>
    );
}

export default AddNewVehicle;
