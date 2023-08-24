import React from "react";
import './App.css';
import VehiclesTable from "./component/VehiclesTable";
import Header from "./component/Header";
import AddNewVehicle from "./component/AddNewVehicle";


function App() {
  return (
      <div>
          <Header />
          <AddNewVehicle />
          <VehiclesTable />
      </div>

  );
}

export default App;
