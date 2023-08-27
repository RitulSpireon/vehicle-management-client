export  function deleteVehicle(vehicle) {
    if(vehicle.serviceStatus !== 'Done')
        window.alert("Service Status should be 'Done' to delete the vehicle.");

    const url ="http://localhost:8081/vehicles/"+vehicle.id;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
        .catch(e => {
            console.log("e", e);
        });

};