import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
        <Typography variant="h6">Welcome to Coursera. Sing up below</Typography>
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
            label="Password"
            type="password"
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
              variant="contained"
              onClick={() => {
                fetch("http://localhost:3000/admin/signup", {
                  method: "POST",
                  body: JSON.stringify({
                    username,
                    password,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    localStorage.setItem("token", data.token);
                    window.location = "/";
                  });
                });
              }}
            >
              SignUp
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
