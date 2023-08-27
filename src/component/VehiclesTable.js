import React, {useEffect, useState } from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow,
} from "@mui/material";
import AlertDialog from "./Dialog";

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


function VehicleDataDisplay(vehicleDetails) {

    return(
            <TableContainer>
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
                                    <AlertDialog vehicle={vehicle} buttonName="Delete" heading={"Are you sure, you want to delete vehicle?"} action="delete" />
                                    <AlertDialog vehicle={vehicle} buttonName="Complete Service" heading={"Are you sure service completed?"} action="update" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}



export default VehiclesTable