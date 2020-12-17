import React, { useState, useEffect } from "react";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
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
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="label"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="value.LyeSapValue"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="value.PotassiumSapValue"
            ></AgGridColumn>
          </AgGridReact>
        </div>
      </header>
    </div>
  );
}

export default App;
