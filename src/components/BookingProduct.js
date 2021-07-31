import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import Select from "react-select";
import data from "../localData/data.json";
import { ArrowLeft, ArrowRightAlt } from "@material-ui/icons";

const BookingProduct = () => {
  const [selectValue, setSelectValue] = useState({
    name: "",
    price: "",
    mileage: null,
    durability: "",
    minimum_rent_period: "",
  });
  const handleChange = (e) => {
    setSelectValue(e);
  };

  const [count1, setCount1] = useState(1);

  const incrementCounter1 = () => setCount1(count1 + 1);
  let decrementCounter1 = () => setCount1(count1 - 1);
  if (count1 <= 1) {
    decrementCounter1 = () => setCount1(1);
  }

  const [count2, setCount2] = useState(1);

  const incrementCounter2 = () => setCount2(count2 + 2);
  let decrementCounter2 = () => setCount2(count2 - 2);
  if (count2 <= 1) {
    decrementCounter2 = () => setCount2(1);
  }

  const confirmProduct = () => {
    alert("Successfully Book Your Product");
  };
  return (
    <>
      <div
        className="modal fade"
        id="bookModalToggle"
        aria-hidden="true"
        aria-labelledby="bookModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookModalToggleLabel">
                Book a product......👇👇👇
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
                {selectValue.mileage ? (
                  <div className="">
                    <p>
                      <b>Product Name:</b> {selectValue.name}
                    </p>
                    <p>
                      <b>Product Price : </b> $
                      {(count2 * selectValue.price).toFixed(2)}
                    </p>
                    <p>
                      <b>Mileage :</b> {selectValue.mileage - count2 + 1}
                    </p>
                    <p>
                      <b>Durability : </b>
                      {selectValue.durability - count2 + 1}
                    </p>
                    <div className="d-flex align-items-center">
                      <b className="mr-2">Rental period : </b>
                      <div className="d-flex align-items-center">
                        <button
                          className="counter_btn"
                          onClick={decrementCounter2}
                        >
                          -
                        </button>
                        <span className="count__number px-3">{count2}</span>
                        <button
                          className="counter_btn"
                          onClick={incrementCounter2}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <p>
                      <b> Product Name : </b> {selectValue.name}
                    </p>
                    <p>
                      <b>Product Price : </b> $
                      {(count1 * selectValue.price).toFixed(2)}
                    </p>
                    <p>
                      <b> Durability : </b>
                      {selectValue.durability - count1 + 1}
                    </p>
                    <div className="d-flex align-items-center">
                      <b className="mr-2">Rental period : </b>
                      <div className="d-flex align-items-center">
                        <button
                          className="counter_btn"
                          onClick={decrementCounter1}
                        >
                          -
                        </button>
                        <span className="count__number px-3">{count1}</span>
                        <button
                          className="counter_btn"
                          onClick={incrementCounter1}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary px-3"
                data-bs-target="#bookModalToggle2"
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
        id="bookModalToggle2"
        aria-hidden="true"
        aria-labelledby="bookModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookModalToggleLabel2">
                Book a product
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
              Do you want to procedure???
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary px-3"
                data-bs-target="#bookModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <ArrowLeft /> Prev
              </button>
              <button className="btn btn-success px-4" onClick={confirmProduct}>
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary px-5"
        data-bs-toggle="modal"
        href="#bookModalToggle"
        role="button"
      >
        Book
      </a>
    </>
  );
};

export default BookingProduct;
