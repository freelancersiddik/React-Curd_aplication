import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Add = () => {
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

  const onSubmit = async (e) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      birthday,
      shift,
      joining,
      position,
      salary,
    } = info;
    e.preventDefault();
    try {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !birthday ||
        !joining ||
        !shift ||
        !position ||
        !salary
      ) {
        toast.warn(<strong>Invalid Field</strong>, {
          position: "top-center",
          autoClose: 1200,
          theme: "dark",
          style: {
            background: "#00000",
          },
        });
      } else {
        await axios
          .post("/add/worker", {
            firstName,
            lastName,
            email,
            phone,
            birthday,
            shift,
            joining,
            position,
            salary,
          })
          .then((response) => {
            toast.success(<strong>Register Successful</strong>, {
              position: "top-center",
              autoClose: 1200,
              theme: "colored",
              style: {
                background: "#C9184A",
              },
            });
            setTimeout(() => {
              history.push("/");
            }, 1150);
          })
          .catch((err) => {
            if (!err.response) {
              toast.error(<strong>Server Not Responding</strong>, {
                position: "top-center",
                autoClose: 1200,
                theme: "colored",
                style: {
                  background: "#00000",
                },
              });
            } else if (err.response.status === 421) {
              toast.error(<strong>Email Already Use</strong>, {
                position: "top-center",
                autoClose: 1200,
                theme: "colored",
                style: {
                  background: "#00000",
                },
              });
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid" id="">
        <ToastContainer />
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-7 col-11 mx-auto">
              <form onSubmit={(e) => onSubmit(e)}>
                <h3>Register Form</h3>
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
                  <option value="50000">50000</option>
                  <option value="40000">40000</option>
                </select>
                <div>
                  <Link to="/">
                    <button>Cancel</button>
                  </Link>
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
