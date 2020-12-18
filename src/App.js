import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
<<<<<<< HEAD
import SapValueGrid from "./SapValuesGrid";

=======
>>>>>>> b3530e8f1d0d9b15bea66997b57dc2c4aeb9f867
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "./App.css";
import {
  entries,
  fetchSapData,
  fecthUsers,
  fetchGHData,
} from "./External-Data/rowEntries";

function App() {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [users, setUsers] = useState([]);
  const [ghData, setGhData] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    const url = "https://api.github.com/users?since=2000";
    fetch(url)
      .then((res) => res.json())
=======
    fetchSapData().then((rowData) => {
      setRowData(rowData || "There is no data");
    });

    fecthUsers().then((users) => {
      setUsers(users || "No users here...");
    });
>>>>>>> b3530e8f1d0d9b15bea66997b57dc2c4aeb9f867

    fetchGHData().then((ghData) => {
      setGhData(ghData || "No users here...");
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="App-header">
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact headerHeight={50} rowData={rowData}>
          <AgGridColumn filter={true} sortable={true} field="id"></AgGridColumn>

          <AgGridColumn filter={true} sortable={true} field="login">
            <span>
              <img src={rowData.map((x) => x.avatar_url)} alt="" />
            </span>
          </AgGridColumn>
          <AgGridColumn
            filter={true}
            sortable={true}
            field="avatar_url"
          ></AgGridColumn>
          <AgGridColumn
            filter={true}
            sortable={true}
            field="repos_url"
          ></AgGridColumn>
        </AgGridReact>
      </div>
      <br />
=======
    <div className="App">
      <header className="App-header">
        <div
          className="ag-theme-balham"
          style={{ height: 400, width: "96%", margin: "0 auto" }}
        >
          <div className="grid-header">
            {" "}
            <h3>Random Users</h3>
          </div>
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
          <div className="grid-header">
            {" "}
            <h3>Saponification Values</h3>
          </div>
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
          <div className="grid-header">
            {" "}
            <h3>COVID-19 History Chart</h3>
          </div>
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
        <div
          className="ag-theme-balham"
          style={{ height: 400, width: "96%", margin: "0 auto" }}
        >
          <div className="grid-header">
            {" "}
            <h3>IMDB Movie Search</h3>
          </div>
          <AgGridReact rowData={ghData}>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="Type"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="Title"
            ></AgGridColumn>
            <AgGridColumn
              sortable={true}
              filter={true}
              checkboxSelection={true}
              field="Year"
            ></AgGridColumn>
          </AgGridReact>
        </div>
      </header>
>>>>>>> b3530e8f1d0d9b15bea66997b57dc2c4aeb9f867
    </div>
  );
}

export default App;
