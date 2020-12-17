import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "./App.css";
import { entries, fetchSapData, fecthUsers } from "./External-Data/rowEntries";

function App() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchSapData().then((rowData) => {
      setRowData(rowData || "There is no data");
    });

    fecthUsers().then((users) => {
      setUsers(users || "No users here...");
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div
          className="ag-theme-balham-dark"
          style={{ height: 400, width: "96%", margin: "0 auto" }}
        >
          <AgGridReact rowData={entries}>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="name"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="email"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="password"
            ></AgGridColumn>
          </AgGridReact>
        </div>
        <div
          className="ag-theme-balham-dark"
          style={{ height: 400, width: "96%", margin: "0 auto" }}
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
        <div
          className="ag-theme-balham-dark"
          style={{ height: 400, width: "96%", margin: "0 auto" }}
        >
          <AgGridReact rowData={users}>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="states"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="dateChecked"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="death"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="positive"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="negative"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="pending"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="recovered"
            ></AgGridColumn>
          </AgGridReact>
        </div>
      </header>
    </div>
  );
}

export default App;
