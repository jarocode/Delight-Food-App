import React, { useState } from "react";
import Layout from "layout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { addListings } from "store/actions/listings";
import { baseURL } from "env";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  React.useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      loginData?.email !== "test@test.com" ||
      loginData?.password !== "password"
    ) {
      return alert("invalid username or password!");
    } else {
      setLoading(true);
      axios({
        method: "get",
        url: baseURL,
      })
        .then((response) => {
          console.log(response.data);
          dispatch(addListings(response?.data?.data));
          setTimeout(() => {
            setLoading(false);
            navigate("/foodListings");
          }, 3000);
        })
        .catch((error) => {
          console.log(error?.response?.data);
        });
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={loginData?.email}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={loginData?.password}
              onChange={handleChange}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            class="btn btn-primary btn-submit"
            disabled={!loginData?.email || !loginData?.password}
            onClick={handleClick}
          >
            {loading ? (
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
