import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const View = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getDataLoad();
  }, []);

  const getDataLoad = async () => {
    const result = await axios.get(`/one/worker/${_id}`);
    setData(result.data);
    console.log(result.data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5 mx-auto">
            <h3>Employee Details</h3>
            <div className="col-md-6 col-11 view_box">
              {/* first name */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>First Name : </strong>
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.firstName}</p>
                </div>
              </div>
              {/* email name */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Email : </strong>
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.email}</p>
                </div>
              </div>
              {/* joining date */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Birthday : </strong>
                  </label>
                </div>
                <div className="col-6">
                  <p>{new Date(data.birthday).toDateString()}</p>
                </div>
              </div>

              {/* joining date */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Salary : </strong>
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.salary}</p>
                </div>
              </div>
              {/* joining date */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Shifting : </strong>
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.shift}</p>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-11 view_box">
              {/* last name */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Last Name : </strong>{" "}
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.lastName}</p>
                </div>
              </div>
              {/* phone number */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Phone Number : </strong>{" "}
                  </label>
                </div>
                <div className="col-6">
                  <p>+88 {data.phone}</p>
                </div>
              </div>
              {/* phone number */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Joining Date : </strong>{" "}
                  </label>
                </div>
                <div className="col-6">
                  <p>{new Date(data.joining).toDateString()}</p>
                </div>
              </div>
              {/* phone number */}
              <div className="row">
                <div className="col-6">
                  <label htmlFor="first">
                    <strong>Position : </strong>{" "}
                  </label>
                </div>
                <div className="col-6">
                  <p>{data.position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
