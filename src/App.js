import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import SapValueGrid from "./SapValuesGrid";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/users?since=2000";
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        setRowData([...data]);
      });
    console.log(rowData);
  }, []);

  return (
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
    </div>
  );
};

export default App;
