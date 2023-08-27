export function updateVehicleStatusAsDone(vehicle) {
    if(vehicle.serviceStatus === 'Done') {
        window.alert("Service Status is already done")
    }
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
    }).catch(e => {
        console.log("e", e);
    });
}