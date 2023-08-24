import React, {useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableRow,
} from "@mui/material";
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

const VehiclesTable=()=>{

    const [data, seTableHeadata] = useState([])

        useEffect(() => {
            //get Vehicles API implement
            const url = "http://localhost:8081/vehicles";
            fetch(url)
                .then(response => response.json()).then(json => {
                console.log(json)
                seTableHeadata(json)
            })
                .catch(e=> {
                    console.log("e",e)
                })
        }, []);
    return (
         VehicleDataDisplay(data)
    )
}


export default VehiclesTable