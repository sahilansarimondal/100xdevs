import React, { useEffect, useState } from "react";
import { Typography, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  console.log(email);

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setEmail(data.username);
      });
    });
  }, []);

  if (email) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div>
          <Typography variant="h5">Coursera</Typography>
        </div>
        <div>
          <Button
            onClick={() => {
              navigate("/create_course");
            }}
          >
            Create
          </Button>
          <Button
            onClick={() => {
              navigate("/courses");
            }}
          >
            Courses
          </Button>
          {email}
          <Button
            variant={"contained"}
            onClick={() => {
              localStorage.setItem("token", "");
              window.location = "/";
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div>
        <Typography variant="h5">Coursera</Typography>
      </div>
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            navigate("/signup");
          }}
          style={{ marginRight: "10px" }}
        >
          Sign Up
        </Button>
        <Button
          variant={"contained"}
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
