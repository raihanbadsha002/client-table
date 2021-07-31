import React, { useState } from "react";
import MaterialTable from "material-table";
import data from "../localData/data.json";
import BookingProduct from "./BookingProduct";
import ReturnProduct from "./ReturnProduct";

const ProductTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Code", field: "code" },
    { title: "Availability", field: "availability" },
    { title: "Need to Repair", field: "needing_repair" },
    { title: "Durability", field: "durability" },
    { title: "Mileage", field: "mileage" },
  ];
  return (
    <div className="container mt-5">
      <MaterialTable
        title="Product Table"
        data={data}
        columns={columns}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          exportButton: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
      />
      <div className="d-flex justify-content-end">
        <div className="d-flex mt-3">
          <div className="">
            <BookingProduct />
          </div>
          <div className="ml-3">
            <ReturnProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
