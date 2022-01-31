import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const Edit = () => {
  useEffect(() => {
    getDataLoad();
  }, []);
  const { _id } = useParams();

  const history = useHistory();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
    shift: "",
    joining: "",
    position: "",
    salary: "",
  });

  // inputs handling
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [name]: value });
  };

  const onSubmitUserData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/update/worker/${_id}`, info);
      toast.success(<strong>Update Successful</strong>, {
        theme: "colored",
        autoClose: 1400,
        position: "top-center",
      });
      setTimeout(() => {
        history.push("/");
      }, 1400);
    } catch (error) {
      console.log(error);
      toast.error(<strong>Not Update</strong>, {
        theme: "colored",
        autoClose: 1400,
        position: "top-center",
      });
    }
  };

  const getDataLoad = async () => {
    const result = await axios.get(`/one/worker/${_id}`);
    setInfo(result.data);
  };

  return (
    <>
      <div className="container-fluid" id="">
        <ToastContainer />
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-7 col-11 mx-auto">
              <form method="PUT" onSubmit={(e) => onSubmitUserData(e)}>
                <h3>Update Details</h3>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  autoComplete="off"
                  value={info.firstName}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  autoComplete="off"
                  value={info.lastName}
                  onChange={handleInput}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="off"
                  value={info.email}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone number"
                  autoComplete="off"
                  value={info.phone}
                  onChange={handleInput}
                />
                <input
                  placeholder="Birthday date"
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  id="date"
                  name="birthday"
                  value={info.birthday}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="joining"
                  placeholder="Joining Date"
                  onFocus={(e) => (e.target.type = "date")}
                  value={info.joining}
                  onChange={handleInput}
                />
                <select
                  aria-label="Position"
                  name="shift"
                  value={info.shift}
                  onChange={handleInput}
                >
                  <option selected>Shift</option>
                  <option value="Day">Day</option>
                  <option value="Night">Night</option>
                  <option value="24/7">24/7</option>
                </select>
                <select
                  aria-label="Position"
                  name="position"
                  value={info.position}
                  onChange={handleInput}
                >
                  <option selected>Position</option>
                  <option value="employee">Employee</option>
                  <option value="manager">Manager</option>
                  <option value="accounter">Accounter</option>
                </select>
                <select
                  aria-label="salary"
                  name="salary"
                  value={info.salary}
                  onChange={handleInput}
                >
                  <option selected>Salary</option>
                  <option value="25000">25000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                </select>
                <div>
                  <Link to="/">
                    <button>Cancel</button>
                  </Link>
                  <button type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
