import React, {useEffect, useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow,
} from "@mui/material";

const VehiclesTable=()=>{
    const [data, setData] = useState([])

    useEffect(() => {
        //get Vehicles API implement
        const url = "http://localhost:8081/vehicles";
        fetch(url)
            .then(response => response.json()).then(json => {
            setData(json)
        })
            .catch(e=> {
                console.log("e",e)
            })
    }, []);

    return (
        VehicleDataDisplay(data)
    )
}

function deleteVehicle(id) {
    const url ="http://localhost:8081/vehicles/"+id;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(response => {
            if (response.status === 201 || response.status === 200) {
                window.alert("Success");
            } else {
                window.alert("Service Status should be done");
            }
        })
        .catch(e => {
            console.log("e", e);
        });
};

function updateVehicleStatusAsDone(vehicle) {
    const data = {
        id: vehicle.id,
        ownerName: vehicle.ownerName,
        vehicleName: vehicle.vehicleName,
        vehicleDescription: vehicle.vehicleDescription,
        serviceStatus: 'Done',
    }

    const url = "http://localhost:8081/vehicles";
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status === 201 || response.status === 200) {
                window.alert("Service Completed");
            } else {
                window.alert("Service already completed");
            }
        })
        .catch(e => {
            console.log("e", e);
        });
}

function VehicleDataDisplay(vehicleDetails) {

    return(
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Vehicle_Id</TableCell>
                            <TableCell>Owner Name</TableCell>
                            <TableCell>Vehicle Name</TableCell>
                            <TableCell>Vehicle Description</TableCell>
                            <TableCell>Service Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicleDetails.map((vehicle) => (
                            <TableRow key={vehicle.id}>
                                <TableCell>{vehicle.id}</TableCell>
                                <TableCell>{vehicle.ownerName}</TableCell>
                                <TableCell>{vehicle.vehicleName}</TableCell>
                                <TableCell>{vehicle.vehicleDescription}</TableCell>
                                <TableCell>{vehicle.serviceStatus}</TableCell>
                                <TableCell>
                                    <Button onClick={() => deleteVehicle(vehicle.id)} >Delete</Button>
                                    <Button onClick={() => updateVehicleStatusAsDone(vehicle)}>Complete Service</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}



export default VehiclesTable