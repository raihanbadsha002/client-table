import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Select from "react-select";
import data from "../localData/data.json";
import { ArrowLeft, ArrowRightAlt } from "@material-ui/icons";

const ReturnProduct = () => {
  const [selectValue, setSelectValue] = useState({
    name: "",
    price: "",
  });
  const handleChange = (e) => {
    setSelectValue(e);
  };
  const ReturnProduct = () => {
    alert("Successfully Requested for return your product");
  };
  return (
    <>
      <div
        className="modal fade"
        id="ReturnModalToggle"
        aria-hidden="true"
        aria-labelledby="ReturnModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ReturnModalToggleLabel">
                Return a Product......👇👇👇
              </h5>
              <button
                type="button"
                className="btn-close btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="modal-body">
              <div className="">
                <Select
                  defaultValue={setSelectValue}
                  options={data}
                  onChange={handleChange}
                  getOptionLabel={(option) => option.name}
                />
              </div>
              <div className="mt-4">
                <p>
                  <b>Product Name:</b> {selectValue.name}
                </p>
                <p>
                  <b>Product Price : </b> ${selectValue.price}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary px-3"
                data-bs-target="#ReturnModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Next <ArrowRightAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ReturnModalToggle2"
        aria-hidden="true"
        aria-labelledby="ReturnModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ReturnModalToggleLabel2">
                Return a Product
              </h5>
              <button
                type="button"
                className="btn-close btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="modal-body text-center">
              Do you want to Return your product???
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary px-3"
                data-bs-target="#ReturnModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <ArrowLeft /> Prev
              </button>
              <button className="btn btn-success px-4" onClick={ReturnProduct}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary px-5"
        data-bs-toggle="modal"
        href="#ReturnModalToggle"
        role="button"
      >
        Return
      </a>
    </>
  );
};

export default ReturnProduct;
