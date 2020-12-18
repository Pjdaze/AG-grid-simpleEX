import React, { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const SapValueGrid = () => {
  const [sapValues, setSapValues] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState([]);

  // example value getter, adds two fields together
  console.log(rowData.params);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn filter={true} sortable={true} field="bio"></AgGridColumn>
        <AgGridColumn
          filter={true}
          sortable={true}
          field="value"
        ></AgGridColumn>
        <AgGridColumn filter={true} sortable={true}></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default SapValueGrid;
