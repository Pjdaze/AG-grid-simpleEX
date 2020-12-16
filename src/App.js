import React, { useState, useEffect } from "react";
<<<<<<< HEAD

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "./App.css";
import { entries } from "./entries";

function App() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [sapValues, setSapValues] = useState({});

  useEffect(() => {
    const url = "https://sapvalues-api.herokuapp.com/sap-values";

    fetch(url)
      .then((res) => res.json())
      .then((rowData) => {
        setRowData(rowData);
      });
    console.log(sapValues);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="ag-theme-balham-dark"
          style={{ height: 400, width: 600 }}
        >
          <AgGridReact rowData={rowData}>
            <AgGridColumn field="label"></AgGridColumn>
            <AgGridColumn field="value.LyeSapValue"></AgGridColumn>
            <AgGridColumn field="value.PotassiumSapValue"></AgGridColumn>
          </AgGridReact>
        </div>
      </header>
    </div>
  );
}
=======
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users?since=990";
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        setRowData([...data]);
      });
    console.log(rowData);
  }, []);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData}>
          <AgGridColumn field="id"></AgGridColumn>
          <AgGridColumn field="login"></AgGridColumn>
          <AgGridColumn field="repos_url"></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};
>>>>>>> a017f138ffa3b2cbbf187ca503a6006d57ccc7f9

export default App;
