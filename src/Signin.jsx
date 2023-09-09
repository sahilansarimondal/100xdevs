import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Signin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>Welcome back. Sign in below </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />

          <Button
            onClick={async () => {
              let { data } = await axios.post(
                "http://localhost:3000/admin/login",
                {},
                {
                  headers: {
                    "Content-Type": "application/json",
                    username: username,
                    password: password,
                  },
                }
              );
              let token = data.token;
              localStorage.setItem("token", token);
              window.location = "/";
            }}
            size={"large"}
            variant="contained"
          >
            {" "}
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
