import React, { useState, useEffect } from "react";
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

export default App;
