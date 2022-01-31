import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Table = () => {
  const [data, setData] = useState([]);
  const [nodata, setNoData] = useState(false);
  useEffect(() => {
    getDataLoad();
  }, []);

  const getDataLoad = async () => {
    const result = await axios.get("/all/worker");
    setData(result.data);
    setNoData(true);
  };

  // delete data
  const deleteData = async (_id) => {
    await axios
      .delete(`/delete/worker/${_id}`)
      .then((response) => {
        if (response.status === 200) {
          toast.info(<strong>Delete Successful</strong>, {
            autoClose: 1000,
            theme: "colored",
            position: "top-center",
          });
          setTimeout(() => {
            getDataLoad();
          }, 1050);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.success(<strong>Delete Successful</strong>, {
            autoClose: 1200,
            theme: "colored",
          });
        }
      });
  };

  return (
    <>
      <div className="container-fluid p-md-5 p-0 py-2">
        <ToastContainer />
        <div className="row mx-auto">
          <div className="col-md-8 col-11 mx-auto">
            <table class="table  col-md-6">
              <thead>
                <tr>
                  <th scope="col">Sno</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Shift</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((curElem, index) => {
                  return (
                    <tr key={curElem._id} className="table_icon">
                      <th scope="row">{index + 1}</th>
                      <td>{curElem.firstName}</td>
                      <td>{curElem.lastName}</td>
                      <td>{curElem.shift}</td>
                      {/* <td>{status}</td> */}
                      <td>
                        <div className="icon_image">
                          <Link to={`/view/worker/${curElem._id}`}>
                            <img src="/icons/view.svg" alt="n" />
                          </Link>
                          <Link to={`/edit/worker/${curElem._id}`}>
                            <img src="/icons/edit.svg" alt="n" />
                          </Link>
                          <img
                            src="/icons/delete.svg"
                            alt="n"
                            onClick={() => deleteData(curElem._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
