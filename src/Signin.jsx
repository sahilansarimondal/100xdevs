import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
function Signin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <div
        style={{
          paddingTop: "150px",
          paddingBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">
          Welcome back to Coursera. Sing In below
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined" style={{ width: "400px", padding: "20px" }}>
          <TextField
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    username,
                    password,
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    localStorage.setItem("token", data.token);
                    window.location = "/";
                  });
                });
              }}
              variant="contained"
            >
              SignIn
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
